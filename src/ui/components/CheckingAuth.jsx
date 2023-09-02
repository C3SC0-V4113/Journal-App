import { CircularProgress, Grid } from "@mui/material";
import { useCheckAuth } from "../../hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const CheckingAuth = () => {
  const { status } = useCheckAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(status);
    if (status == "authenticated") {
      navigate("/");
    } else if (status == "not-authenticated") navigate("/auth");
  }, [status]);

  return (
    <Grid
      container
      spacing={0}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid itemScope justifyContent={"center"}>
        <CircularProgress color="warning" />
      </Grid>
    </Grid>
  );
};
