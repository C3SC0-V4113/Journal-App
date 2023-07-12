import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    console.log("startNewNote");
    const { uid } = getState().auth;
    // uid

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notas/`));

    const setDockResp = await setDoc(newDoc, newNote);

    console.log({ newDoc, setDockResp });
    dispatch();

    // dispatch(newNote);
    // dispatch(activateNote);
  };
};
