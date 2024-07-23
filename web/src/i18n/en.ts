export default {
  // navigation
  "nav.basic": "Basic",
  "nav.server": "Server",
  "nav.location": "Location",
  "nav.upstream": "Upstream",
  "nav.plugin": "Plugin",
  "nav.certificate": "Certificate",
  // header
  "header.title": "Informations",
  "header.startTime": "Start Time: ",
  "header.memory": "Memory: ",
  "header.architecture": "Architecture: ",
  "header.configHash": "Config Hash: ",
  "header.restart": "Restart Pingap",
  "header.restartTips": "Pingap will graceful restart with new configuration.",
  "header.confirmTips": "Are you sure to restart pingap?",
  "header.confirm": "Restart",
  "header.cancel": "Cancel",
  // basic info
  "basic.title": "Modify the basic configurations",
  "basic.description":
    "The basic configuration of pingap mainly includes various configurations such as logs, graceful restart, threads, etc.",
  "basic.name": "Name",
  "basic.pidFile": "Pid File(only for deamon)",
  "basic.upgradeSock": "Upgrade Sock For Daemon",
  "basic.threads": "Each Server Default Threads(default:1)",
  "basic.workStealing": "Work Stealing",
  "basic.user": "User For Daemon",
  "basic.group": "Group For Daemon",
  "basic.gracePeriod": "Grace Period For Exit(default:5m)",
  "basic.gracefulShutdownTimeout": "Graceful Shutdown Timeout(default:5s)",
  "basic.logLevel": "Log Level(e.g. info, error, warn, debug)",
  "basic.logBufferedSize": "Log Buffered Size(e.g. 1kb, 1mb)",
  "basic.logFormatJson": "Log Format Json(default:false)",
  "basic.autoRestartCheckInterval": "Auto Restart Check Interval(default:90s)",
  "basic.upstreamKeepalivePoolSize":
    "Upstream Keepalive Pool Size(default:128)",
  "basic.cacheDirectory":
    "Program Cache Directory(If set, file caching is used)",
  "basic.cacheMaxSize": "Program Sharing Cache Max Size(default:100MB)",
  "basic.webhookType": "Webhook Type",
  "basic.webhookNotifications": "Webhook Notifications",
  "basic.webhook": "Webhook Http Url",
  "basic.sentry": "Sentry Connect Url",
  "basic.pyroscope": "Pyroscope Connect Url(should rebuild with pyro feature)",
  "basic.errorTemplate": "Error Template(default is html, it can be json too)",
  // server info
  "server.title": "Modify server configuration",
  "server.description":
    "Server configuration including listening ports, threads and log format layout",
  "server.addr": "Listen Address, Multiple Addresses Separated By Comma",
  "server.locations": "Select Locations",
  "server.threads": "The Threads Of Server(default:1)",
  "server.accessLog": "Access Log Format Layout(e.g. thiny, short, combined)",
  "server.tlsCert": "Tls Cert Pem",
  "server.tlsKey": "Tls Key Pem",
  "server.globalCertificates":
    "Use The Global Certificates(for different certificates)",
  "server.letsEncrypt": "Let's Encrypt Domain List",
  "server.certificateFile": "The File For Saving Certificate",
  "server.enabledH2": "Enable Http2(h2c for http)",
  "server.tlsCipherList": "Tls Ciphers For Protocols Before TLSv1.3",
  "server.tlsCiphersuites": "Tls Ciphers For Protocols TLSv1.3",
  "server.tlsMinVersion": "Tls Min Proto Version",
  "server.tlsMaxVersion": "Tls Max proto Version",
  "server.tcpFastOpen": "The Backlog Size Of Tcp Fast Open(e.g. 10)",
  "server.tcpIdle": "Tcp Keepalive Idle Duration(e.g. 2m)",
  "server.tcpInterval": "Tcp Keepalive Interval Duration(e.g. 60s)",
  "server.tcpProbeCount": "Tcp Keepalive Probe Max Number(e.g. 1000)",
  "server.prometheusMetrics":
    "The Metrics Path Of Prometheus(it can be push gateway uri or path for pull mode)",
  "server.remark": "Remark",
  // location info
  "location.title": "Modify location configuration",
  "location.description":
    "Location configuration including host and path for match, request headers",
  "location.host": "Host, Multiple Hosts Separated By Comma",
  "location.path": "Path(support regexp, prefix and equal mode)",
  "location.upstream": "Select Upstream",
  "location.weight": "The Weight Of Location",
  "location.rewrite": "Regexp Rewrite(e.g. ^/api/ /)",
  "location.plugins": "Select Plugins For Location",
  "location.clientMaxBodySize": "Client Max Body Size(e.g. 10mb)",
  "location.proxySetHeaders": "Set Proxy Headers",
  "location.proxyAddHeaders": "Add Proxy Headers",
  "location.remark": "Remark",
  // upstream info
  "upstream.title": "Modify upstream configuration",
  "upstream.description":
    "Upstream configuration including address list, timeouts and tcp options",
  "upstream.addrs": "Upstream Addrs(ip:port)",
  "upstream.discovery":
    "Upstream Node Discover Type(domain should use dns discovery)",
  "upstream.updateFrequency": "Discovery Update Frequency(e.g. 30s)",
  "upstream.algo": "Load Balancer Algorithm(default:roundRobin)",
  "upstream.healthCheck": "Health Check(support tcp or http check)",
  "upstream.connectionTimeout": "Connection Timeout(e.g. 30s)",
  "upstream.totalConnectionTimeout": "Total Connection Timeout(e.g. 60s)",
  "upstream.readTimeout": "Read Timeout(e.g. 10s)",
  "upstream.writeTimeout": "Write Timeout(e.g. 30s)",
  "upstream.idleTimeout": "Idle Timeout(e.g. 5m)",
  "upstream.alpn": "Alpn(default:H1)",
  "upstream.sni": "Sni",
  "upstream.verifyCert": "Verify Cert",
  "upstream.ipv4Only": "Ipv4 Only",
  "upstream.enableTracer": "Enable Tracer(default:false)",
  "upstream.tcpFastOpen": "Enable tcp fast open",
  "upstream.tcpRecvBuf": "Tcp Recv Buffer Size(e.g. 4kb)",
  "upstream.tcpIdle": "Tcp Keepalive Idle Duration(e.g. 2m)",
  "upstream.tcpInterval": "Tcp Keepalive Interval Duration(e.g. 10s)",
  "upstream.tcpProbeCount": "Tcp Keepalive Probe Max Number(e.g. 1000)",
  "upstream.remark": "Remark",
  // certificate info
  "certificate.title": "Certificate for https",
  "certificate.description": "The setting of certificate",
  "certificate.tlsCert": "Tls Cert Pem",
  "certificate.tlsKey": "Tls Key Pem",
  "certificate.tlsChain": "Tls Chain Pem",
  "certificate.domains": "The Domain List For Let's Encrypt",
  "certificate.certificateFile":
    "The File For Saving Let's Encrypt Certificate",
  "certificate.acme": "The Acme For Generating Certificate",
  // plugin info
  "plugin.title": "Modify plugin configuration",
  "plugin.description": "All plugin configuration of pingap",
  "plugin.step": "Plugin Exec Step",
  "plugin.category": "Plugin Category",
  "plugin.config": "Plugin Config Data",
  "plugin.remark": "Remark",
  // form
  "form.name": "Name",
  "form.removing": "Removing",
  "form.remove": "Remove",
  "form.submitting": "Submitting",
  "form.submit": "Submit",
  "form.showMore": "Show More Options",
  "form.hideMore": "Hide More Options",
  "form.success": "Update success!",
  "form.confirmRemove": "Remove config?",
  "form.removeDescript":
    "Please confirm whether you want to delete the configuration, and it can not be restored after delete it.",
  "form.confirm": "Confirm",
  "form.cancel": "Cancel",
  "form.nameRequired": "Name is required",
  "form.nameExists": "Name is exitst",
  "form.sortPlugin": "Sort plugins",
  "form.selectPlugin": "Select plugins",
  "form.addr": "Addr(e.g. 127.0.0.1:8001)",
  "form.weight": "Weight",
  "from.addrs": "Add addr",
  "form.proxyHeaderName": "Header Name",
  "form.proxyHeaderValue": "Header Value",
  "form.compressionGzipLevel": "Gzip Level",
  "form.compressionBrLevel": "Br Level",
  "form.compressionZstdLevel": "Zstd Level",
  "form.compressionDecompression": "Support Decompression",
  "form.adminPath": "The Path Admin Web Management",
  "form.adminIpFailLimit": "Auth Fail Ip Limit Count(default:5)",
  "form.adminAuthorization": "Base64 Value For Basic Auth(base64(user:pass))",
  "form.adminAuthorizationAdd": "Add More Authorization",
  "form.limitCategory": "The Limit Category",
  "form.limitTag": "The Limit Tag",
  "form.limitKey": "The Limit Key",
  "form.limitMax": "The Limit Max Value",
  "form.limitInterval": "The Limit Interval For Rate",
  "form.allow": "Allow",
  "form.deny": "Deny",
  "form.dirPath": "The Directory For Static Serve",
  "form.dirIndex": "Default Index File",
  "form.dirAutoIndex": "Set Auto Index For Directory",
  "form.dirChunkSize": "The Chunk Size For Static Response(default:4kb)",
  "form.dirMaxAge": "The Max Age Of Http Cache Control(e.g. 1h, 1d)",
  "form.dirCachePrivate": "The Cache As Private",
  "form.dirCharset": "The Charset Of Response",
  "form.dirDownload": "Supports Download File",
  "form.dirHeaderName": "Response Header Name",
  "form.dirHeaderValue": "Response Header Value",
  "form.dirHeaderAdd": "Add Header To Response",
  "form.requestIdAlgo": "The Algorithm For Genenrating Id(default:uuid)",
  "form.requestIdLength": "The Length Of Id(Only For Nanoid)",
  "form.requestIdHeaderName":
    "The Http Request Header Name Of Request Id(default:x-request-id)",
  "form.ipList": "The Ip List",
  "form.ipRestrictionAdd": "Add More Ip Or Ip Net",
  "form.ipRestrictionAllow": "Allow",
  "form.ipRestrictionDeny": "Deny",
  "form.ipRestrictionMessage":
    "Error Message For Invalid(default:Request is forbidden)",
  "form.ipRestrictionMode": "The Restriction Mode, Allow Or Deny",
  "form.refererRestrictionMode": "The Restriction Mode, Allow Or Deny",
  "form.refererRestrictionAllow": "Allow",
  "form.refererRestrictionDeny": "Deny",
  "form.refererList": "Referer Host List",
  "form.refererRestrictionAdd": "Add More Referer",
  "form.refererRestrictionMessage":
    "Error Message For Invalid(default:Request is forbidden)",
  "form.keyAuthQuery": "The Query Name For Key Auth",
  "form.keyAuthHeader": "The Header Name For Key Auth",
  "form.keyAuthValues": "The Key Value List",
  "form.keyAuthAdd": "Add Key Value",
  "form.keyAuthHideCredentials": "Remove Auth Information",
  "form.basicAuthList":
    "The Basic Authorization List, Base64(account:password)",
  "form.basicAuthAdd": "Add Basic Auth",
  "form.basicAuthHideCredentials": "Remove Auth Information",
  "form.jwtAuthHeader": "The Header Name For Key Auth",
  "form.jwtAuthQuery": "The Query Name For Key Auth",
  "form.jwtAuthCookie": "The Cookie Name For Key Auth",
  "form.jwtAuthSecret": "The Secret Of Jwt Auth",
  "form.jwtSignPath": "The Sign Path Of Jwt",
  "form.jwtSignAlgorithm": "The Sign Algorithm",
  "form.redirectHttps": "Redirect Http To Https",
  "form.redirectPrefix": "The Prefix Add To Redirect Path",
  "form.statsPath": "The Path Of Stats",
  "form.pingPath": "The Path Of Ping",
  "form.responseHeadersAddHeaderName": "Add Header Name",
  "form.responseHeadersAddHeaderValue": "Add Header Value",
  "form.responseHeadersAdd": "Add More Header",
  "form.responseHeadersSetHeaderName": "Set Header Name",
  "form.responseHeadersSetHeaderValue": "Set Header Value",
  "form.responseHeadersSet": "Set More Header",
  "form.responseHeadersRemoveHeaderName": "Remove Header Name",
  "form.responseHeadersRemove": "Remove More Header",
  "form.mockPath": "Response Match Path",
  "form.mockStats": "Response Status(default:200)",
  "form.mockHeader": "Add Response Header",
  "form.mockHeaderName": "Mock Header Name Of Response",
  "form.mockHeaderValue": "Mock Header Value Of Response",
  "form.mockData": "Response Data",
  "form.csrfTokenPath": "The Path For Get Csrf Token",
  "form.csrfName": "The Name Of Csrf Token(default:x-csrf-token)",
  "form.csrfKey": "The Secret Key For Csrf",
  "form.csrfTtl": "The Ttl Of Csrf Token(e.g. 1h)",
  "form.cacheLock": "Lock Time Concurrent Lookups To The Same Asset(e.g. 1s)",
  "form.cacheMaxFileSize":
    "The Max File Size To Cache(Bigger will be not cached, default:1mb)",
  "form.cacheNamespace": "The Name Space Of Cache",
  "form.cacheHeaders": "The Headers Value Add To Cache Key",
  "form.cacheHeadersAdd": "Add More Header For Cache key",
  "form.cacheEviction": "Enable Evicted From Storage",
  "form.cachePredictor": "Enable Predictor",
  "form.cacheMaxTtl": "Max Ttl Of Cache(e.g. 10m)",
  // cors
  "form.corsPath": "The Gegexp Path For Cors(optional)",
  "form.corsAllowOrigin": "The Allow Origin",
  "form.corsAllowMethods": "The Allow Methods",
  "form.corsAllowHeaders": "The Allow Headers",
  "form.corsMaxAge": "The Cache Max Age(default:1h)",
  "form.corsAllowCredentials": "Allow Credentials",
  "form.corsExposeHeaders": "The expose headers",
};
