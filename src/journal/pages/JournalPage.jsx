// import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";

import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView } from "../views";
import { startNewNote } from "../../store";
import { useMemo } from "react";

export const JournalPage = () => {
  const dispatch = useDispatch();
  const { isSaving } = useSelector((state) => state.journal);

  const isSavingStatus = useMemo(() => isSaving, [isSaving]);

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>
      <NothingSelectedView />
      {/* <NoteView /> */}
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
    </JournalLayout>
  );
};
