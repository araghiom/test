import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Menu from "./Menu";
import Logo from "./Logo";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FormLogin from "./Form";

export default function Login() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 30,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Logo />
        <FormLogin />
      </Box>
      <Grid container>
        <Menu />
      </Grid>
    </Container>
  );
}
