import { useEffect } from "react";
import { useMemo } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Form, Link as RouterLink, useOutletContext } from "react-router-dom";

import Google from "@mui/icons-material/Google";
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";

import { useForm } from "../../../hooks";
import { startGoogleSignIn, startLoginWithEmail } from "../../../store";

const formData = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useOutletContext();

  const { status, errorMessage } = useSelector((state) => state.auth);

  const { email, password, onInputChange } = useForm(formData);

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (event) => {
    //Sevent.preventDefault();
    //dispatch(startLoginWithEmail({ email, password }));
  };

  // const onGoogleSignIn = () => {
  //   dispatch(startGoogleSignIn());
  // };

  useEffect(() => {
    setTitle("Login");
  }, [title, setTitle]);

  return (
    <Form
      className="animate__animated animate__fadeIn animate__faster"
      onSubmit={onSubmit}
      aria-label="submit-form"
      action="login"
      method="post"
    >
      <Grid container>
        <Grid item xs={12} sx={{ marginTop: 2 }}>
          <TextField
            label="Correo"
            type="email"
            placeholder="mail@google.com"
            fullWidth
            name="email"
            value={email}
            onChange={onInputChange}
          />
        </Grid>
        <Grid item xs={12} sx={{ marginTop: 2 }}>
          <TextField
            inputProps={{
              "data-testid": "password",
            }}
            label="Contraseña"
            type="password"
            placeholder="contraseña"
            fullWidth
            name="password"
            value={password}
            onChange={onInputChange}
          />
        </Grid>
        <Grid container spacing={2} sx={{ marginBottom: 2, marginTop: 1 }}>
          <Grid item xs={12} display={errorMessage ? "" : "none"}>
            <Alert severity="error">{errorMessage}</Alert>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              disabled={isAuthenticating}
              type="submit"
              name="intent"
              value="mail"
              variant="contained"
              fullWidth
            >
              <Typography>Login</Typography>
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              disabled={isAuthenticating}
              type="submit"
              name="intent"
              value="google"
              variant="outlined"
              fullWidth
              //onClick={onGoogleSignIn}
              aria-label="google-sign-in"
            >
              <Google /> <Typography sx={{ ml: 1 }}>Google</Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid container direction={"row"} justifyContent={"end"}>
          <Link component={RouterLink} color={"inherit"} to="/auth/register">
            Crear una cuenta
          </Link>
        </Grid>
      </Grid>
    </Form>
  );
};
