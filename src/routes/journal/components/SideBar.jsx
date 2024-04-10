import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import {
  Divider,
  Drawer,
  IconButton,
  List,
  Toolbar,
  Typography,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import { SideBarItem } from "./SideBarItem";

export const SideBar = ({ drawerWidth, open, handleDrawerClose }) => {
  const { displayName } = useSelector((state) => state.auth);
  const { notes } = useSelector((state) => state.journal);

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" noWrap component={"div"}>
          {displayName}
        </Typography>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        {notes.map((note) => (
          <SideBarItem {...note} key={note.id} />
        ))}
      </List>
    </Drawer>
  );
};

SideBar.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
  open: PropTypes.bool.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
};
