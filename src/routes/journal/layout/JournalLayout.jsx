import { Box, IconButton, Toolbar, useTheme } from "@mui/material";
import { NavBar, SideBar } from "../components";
import { Outlet } from "react-router-dom";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useMemo, useState } from "react";
import { startNewNote } from "../../../store";

const drawerWidth = 240;

export const JournalLayout = () => {
  const dispatch = useDispatch();
  const { isSaving } = useSelector((state) => state.journal);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const isSavingStatus = useMemo(() => isSaving, [isSaving]);

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };
  return (
    <Box
      sx={{ display: "flex", overflowX: "hidden" }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <NavBar
        drawerWidth={drawerWidth}
        open={open}
        handleDrawerOpen={handleDrawerOpen}
      />
      <SideBar
        drawerWidth={drawerWidth}
        open={open}
        handleDrawerClose={handleDrawerClose}
      />
      <Box
        component={"main"}
        sx={{
          flexGrow: 1,
          p: 3,
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          marginLeft: `-${drawerWidth}px`,
          ...(open && {
            transition: theme.transitions.create("margin", {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
          }),
        }}
      >
        <Toolbar />
        <Outlet />
        <IconButton
          size="large"
          sx={{
            color: "white",
            backgroundColor: "error.main",
            ":hover": { backgroundColor: "error.main", opacity: 0.9 },
            position: "fixed",
            right: 50,
            bottom: 50,
            ...(open && {
              display: "none",
            }),
          }}
          onClick={onClickNewNote}
          disabled={isSavingStatus}
        >
          <AddOutlined sx={{ fontSize: 30 }} />
        </IconButton>
      </Box>
    </Box>
  );
};
