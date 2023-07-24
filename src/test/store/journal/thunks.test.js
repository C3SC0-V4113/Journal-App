import { collection, deleteDoc, getDocs } from "firebase/firestore/lite";
import {
  addNewEmptyNote,
  savingNewNote,
  setActiveNote,
} from "../../../store/journal/journalSlice";
import { startNewNote } from "../../../store/journal/thunks";
import { FirebaseDB } from "../../../firebase";

jest.mock("../../../firebase/providers");
describe("pruebas en thunks.js de journal", () => {
  const dispatch = jest.fn();
  const getState = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("startNewNote debe de crear una nueva nota en blanco", async () => {
    const uid = "TEST-UID";
    getState.mockReturnValue({ auth: { uid } });

    await startNewNote()(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(savingNewNote());

    expect(dispatch).toHaveBeenCalledWith(
      addNewEmptyNote({
        body: "",
        title: "",
        id: expect.any(String),
        date: expect.any(Number),
        imageUrls: expect.any(Array),
      })
    );

    expect(dispatch).toHaveBeenCalledWith(
      setActiveNote({
        body: "",
        title: "",
        id: expect.any(String),
        date: expect.any(Number),
        imageUrls: expect.any(Array),
      })
    );

    // Borrar de Firebase
    const collectionRef = collection(FirebaseDB, `${uid}/journal/notas/`);

    const docs = await getDocs(collectionRef);

    const deletePromises = [];
    docs.forEach((doc) => deletePromises.push(deleteDoc(doc.ref)));
    await Promise.all(deletePromises);
  }, 20000);
});
