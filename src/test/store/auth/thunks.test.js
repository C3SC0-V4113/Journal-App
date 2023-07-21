import { signInWithGoogle } from "../../../firebase";
import { checkingCredentials, login, logout } from "../../../store/auth";
import {
  checkingAuthentication,
  startGoogleSignIn,
} from "../../../store/auth/thunks";
import { demoUser } from "../../fixtures/authFixtures";

jest.mock("../../../firebase/providers");

describe("pruebas en thunks.js de auth", () => {
  const dispatch = jest.fn();

  beforeEach(() => jest.clearAllMocks());
  test("debe de invocar el checking credentials", async () => {
    // thunk
    await checkingAuthentication()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });

  test("startGoogleSignIn debe de llamar checkingCredentials y login", async () => {
    const loginData = {
      ok: true,
      ...demoUser,
    };

    await signInWithGoogle.mockResolvedValue(loginData);

    // thunk
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test("startGoogleSignIn debe de llamar checkingCredentials y logout - Error", async () => {
    const errorMessage = "Un error en Google";
    const loginData = {
      ok: false,
      errorMessage,
    };

    await signInWithGoogle.mockResolvedValue(loginData);

    // thunk
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout({ errorMessage }));
  });
});
