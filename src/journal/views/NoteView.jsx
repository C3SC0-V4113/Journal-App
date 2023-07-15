import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";
import { useForm } from "../../hooks";
import { useSelector } from "react-redux";
import { useMemo } from "react";

export const NoteView = () => {
  const { active: note } = useSelector((state) => state.journal);
  const { body, title, date, formState, onInputChange } = useForm(note);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  console.log(formState);

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
        <Button color="primary" sx={{ p: 2 }}>
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
