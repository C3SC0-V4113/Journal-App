import PropTypes from "prop-types";

import { useDispatch } from "react-redux";

import LogoutOutlined from "@mui/icons-material/LogoutOutlined";
import MenuOutlined from "@mui/icons-material/MenuOutlined";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";

import { startLogout } from "../../../store";

export const NavBar = ({ drawerWidth }) => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(startLogout());
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: {
          sm: `${drawerWidth}px`,
        },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>
        <Grid
          container
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="h6" noWrap component={"div"}>
            Journal App
          </Typography>
          <IconButton onClick={onLogout} color="error">
            {" "}
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

NavBar.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
};
