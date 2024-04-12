import PropTypes from "prop-types";

import { useDispatch } from "react-redux";

import LogoutOutlined from "@mui/icons-material/LogoutOutlined";
import MenuOutlined from "@mui/icons-material/MenuOutlined";
import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";

import { startLogout } from "../../../store";

export const NavBar = ({ drawerWidth, open, handleDrawerOpen }) => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(startLogout());
  };
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      sx={{
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }),
      }}
    >
      <Toolbar
        sx={{
          minWidth: 320,
          overflowX: "hidden",
        }}
      >
        <IconButton
          color="inherit"
          edge="start"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          sx={{ mr: 2, ...(open && { display: "none" }) }}
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
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

NavBar.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
  open: PropTypes.bool.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
};
