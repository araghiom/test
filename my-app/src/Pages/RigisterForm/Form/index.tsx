import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import axios from "../../../Servise";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../../Context/AuthProvider";

const LOGIN_URL = "users";

export default function Form() {
  let navigate = useNavigate();
  const { setAuth ,storeLogin} = useContext<any>(AuthContext);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    onSubmit(
      data.get("firstName"),
      data.get("lastName"),
      data.get("email"),
      data.get("password")
    );
  };

  const onSubmit = async (
    firstName: any,
    lastName: any,
    email: any,
    password: any
  ) => {
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
        {
          headers: { "content-type": "application/json" },
          withCredentials: true,
        }
      );

      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ email, password, accessToken, roles });
      storeLogin();
      navigate("../dashbord/home", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <Grid container columnSpacing={{ md: 2 }}>
          <Grid item xs={6}>
            {" "}
            <TextField
              margin="normal"
              required
              fullWidth
              id="fristName"
              label="firstName"
              name="firstName"
              autoComplete="firstName"
              autoFocus
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="lastName"
              name="lastName"
              autoComplete="lastName"
              autoFocus
            />
          </Grid>
        </Grid>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Repeat-Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="agree" color="primary" />}
          label="I agree"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}>
          Submit
        </Button>
        <Grid container></Grid>
      </Box>
    </>
  );
}
