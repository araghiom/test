import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <Grid item xs>
        <Link to="#">
          <Button>Forgot password?</Button>
        </Link>
      </Grid>
      <Grid item>
        <Link to="/rigister">
          <Button variant="text">Don't have an account? </Button>
        </Link>
      </Grid>
    </>
  );
}
