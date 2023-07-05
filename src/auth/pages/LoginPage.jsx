import { Google } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout";
import { useForm } from "../../hooks";

export const LoginPage = () => {
  const { email, password, onInputChange, formState } = useForm({
    email: "frankjose00@gmail.com",
    password: "123456",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  const onGoogleSignIn = () => {
    console.log("onGoogleSignIn");
  };
  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
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
            <Grid item xs={12} sm={6}>
              <Button type="submit" variant="contained" fullWidth>
                <Typography>Login</Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="outlined" fullWidth onClick={onGoogleSignIn}>
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
      </form>
    </AuthLayout>
  );
};
