import { Grid, Typography } from "@mui/material";
import { Link, useRouteError } from "react-router-dom";

export const RoutingError = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <Grid
      container
      spacing={0}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid itemScope container justifyContent={"center"} direction={"column"}>
        <Typography color={"white"} variant="h5">
          Theres been an error!
        </Typography>
        <Typography color={"white"} variant="body1">
          {error.statusText || error.message}
        </Typography>
        <Typography color={"white"} variant="button">
          <Link to={"/"}>Lets Go Home</Link>
        </Typography>
      </Grid>
    </Grid>
  );
};
