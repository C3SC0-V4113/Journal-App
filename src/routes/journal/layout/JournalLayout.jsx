import { Box, IconButton, Toolbar } from "@mui/material";
import { NavBar, SideBar } from "../components";
import { Outlet } from "react-router-dom";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { startNewNote } from "../../../store";

const drawerWidth = 240;

export const JournalLayout = () => {
  const dispatch = useDispatch();
  const { isSaving } = useSelector((state) => state.journal);

  const isSavingStatus = useMemo(() => isSaving, [isSaving]);

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };
  return (
    <Box
      sx={{ display: "flex" }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <NavBar drawerWidth={drawerWidth} />
      <SideBar drawerWidth={drawerWidth} />
      <Box component={"main"} sx={{ flexGrow: 1, p: 3 }}>
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
