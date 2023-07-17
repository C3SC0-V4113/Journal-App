import { useEffect, useMemo, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import Swal from "sweetalert2";

import { ImageGallery } from "../components";
import { useForm } from "../../hooks";
import {
  setActiveNote,
  startSaveNotes,
  startUploadingFiles,
} from "../../store";

export const NoteView = () => {
  const dispatch = useDispatch();

  const {
    isSaving,
    active: note,
    messageSaved,
  } = useSelector((state) => state.journal);

  const { body, title, date, formState, onInputChange } = useForm(note);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  const isSavingStatus = useMemo(() => isSaving, [isSaving]);

  useEffect(() => {
    // console.log(formState);
    dispatch(setActiveNote(formState));
  }, [dispatch, formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire("Nota actualizada!", messageSaved, "success");
    }
  }, [messageSaved]);

  const onSaveNote = () => {
    dispatch(startSaveNotes());
  };

  const onFileInputChange = ({ target }) => {
    if (target.files === 0) return;

    console.log("subiendo archivos");
    dispatch(startUploadingFiles(target.files));
  };

  const fileInputRef = useRef();

  return (
    <Grid
      container
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{ mb: 1 }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Grid item>
        <Typography fontSize={39} fontWeight={"light"}>
          {dateString}
        </Typography>
      </Grid>
      <Grid item>
        <input
          type="file"
          multiple
          onChange={onFileInputChange}
          style={{ display: "none" }}
          ref={fileInputRef}
        />
        <IconButton
          color="primary"
          onClick={() => fileInputRef.current.click()}
          disabled={isSavingStatus}
        >
          <UploadOutlined />
        </IconButton>
        <Button
          onClick={onSaveNote}
          color="primary"
          sx={{ p: 2 }}
          disabled={isSavingStatus}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un título"
          label={"Título"}
          value={title}
          name="title"
          onChange={onInputChange}
          sx={{ border: "none", mb: 1 }}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Que sucedio hoy?"
          value={body}
          name="body"
          onChange={onInputChange}
          minRows={5}
        />
      </Grid>
      <ImageGallery />
    </Grid>
  );
};
