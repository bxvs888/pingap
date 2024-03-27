import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import theme from "./theme";
import MainNav from "./components/main-nav";
import { RouterProvider } from "react-router-dom";
import router from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={"auto"}>
          <MainNav />
        </Grid>
        <Grid item xs={true}>
          <div
            style={{
              height: 50,
            }}
          ></div>
          <RouterProvider router={router} />
        </Grid>
      </Grid>
    </ThemeProvider>
  </React.StrictMode>,
);
