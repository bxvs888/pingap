// Copyright 2024 Tree xie.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

use crate::util;
use crate::webhook;
use async_trait::async_trait;
use log::{info, warn};
use pingora::server::ShutdownWatch;
use pingora::services::background::BackgroundService;
use std::time::Duration;
use tokio::time::interval;
use x509_parser::certificate::Validity;

pub struct ValidityChecker {
    validity_list: Vec<(String, Validity)>,
}

impl ValidityChecker {
    pub fn new(validity_list: Vec<(String, Validity)>) -> Self {
        Self { validity_list }
    }
}

#[async_trait]
impl BackgroundService for ValidityChecker {
    async fn start(&self, mut shutdown: ShutdownWatch) {
        let period = Duration::from_secs(60 * 60);
        let time_offset = 7 * 24 * 3600_i64;

        let offset_human: humantime::Duration = Duration::from_secs(time_offset as u64).into();
        let period_human: humantime::Duration = period.into();
        info!(
            "Start tls validity checker background service, offset:{offset_human}, period:{period_human}, validity_list:{:?}",
            self.validity_list
        );

        let mut period = interval(period);

        loop {
            tokio::select! {
                _ = shutdown.changed() => {
                    break;
                }
                _ = period.tick() => {
                    let now = util::now().as_secs() as i64;
                    for (name, validity) in self.validity_list.iter() {
                        if now > validity.not_after.timestamp() - time_offset {
                            let message = format!("{name} cert will be expired, expired date:{:?}", validity.not_after);
                            warn!("{message}");

                            webhook::send(webhook::SendNotificationParams {
                                level: webhook::NotificationLevel::Warn,
                                category: webhook::NotificationCategory::TlsValidity,
                                msg: message,
                            });
                        }
                        if now < validity.not_before.timestamp() {
                            let message = format!("{name} cert is not valid, valid date:{:?}", validity.not_before);
                            warn!("{message}");
                            webhook::send(webhook::SendNotificationParams {
                                level: webhook::NotificationLevel::Warn,
                                category: webhook::NotificationCategory::TlsValidity,
                                msg: message,
                            });
                        }
                    }
                }
            }
        }
    }
}
