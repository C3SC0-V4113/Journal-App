import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase";
import { addNewEmptyNote, savingNewNote, setActiveNote } from "./journalSlice";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    // TODO: tarea dispatch

    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notas/`));

    await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;

    dispatch(savingNewNote());
    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));

    // dispatch(newNote);
    // dispatch(activateNote);
  };
};
