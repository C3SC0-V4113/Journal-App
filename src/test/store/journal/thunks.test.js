import { startNewNote } from "../../../store/journal/thunks";

jest.mock("../../../firebase/providers");
describe("pruebas en thunks.js de journal", () => {
  const dispatch = jest.fn();
  const getState = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("startNewNote debe de crear una nueva nota en blanco", async () => {
    const uid = "TEST-UID";
    getState.mockReturnValue({ auth: { uid } });

    await startNewNote()(dispatch, getState);
  }, 20000);
});
