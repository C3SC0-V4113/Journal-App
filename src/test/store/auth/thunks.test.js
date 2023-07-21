import {
  loginWithEmail,
  logoutFirebase,
  registerUserWithEmail,
  signInWithGoogle,
} from "../../../firebase";
import { checkingCredentials, login, logout } from "../../../store/auth";
import {
  checkingAuthentication,
  startCreatingUserWithEmail,
  startGoogleSignIn,
  startLoginWithEmail,
  startLogout,
} from "../../../store/auth/thunks";
import { clearNotesLogout } from "../../../store/journal";
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

  test("startGoogleSignIn debe de llamar checkingCredentials y login - Exito", async () => {
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

  test("startLoginWithEmail debe de llamar checkingCredential y login - Exito", async () => {
    const loginData = {
      ok: true,
      ...demoUser,
    };

    const formData = {
      email: demoUser.email,
      password: "ABC123",
    };

    await loginWithEmail.mockResolvedValue(loginData);

    await startLoginWithEmail(formData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test("startLogout debe de llamar logoutFirebase, clearNotes y logout", async () => {
    await startLogout()(dispatch);

    expect(logoutFirebase).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
    expect(dispatch).toHaveBeenCalledWith(logout({ errorMessage: "" }));
  });

  test("startCreatingUserWithEmail debe llamar checkingCredentials y login - Exito", async () => {
    const loginData = {
      ok: true,
      ...demoUser,
    };

    const formData = {
      email: demoUser.email,
      displayName: demoUser.displayName,
      password: "ABC123",
    };

    await registerUserWithEmail.mockResolvedValue(loginData);

    await startCreatingUserWithEmail(formData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(demoUser));
  });

  test("startCreatingUserWithEmail debe llamar checkingCredentials y logout - Error", async () => {
    const formData = {
      email: demoUser.email,
      displayName: demoUser.displayName,
      password: "ABC123",
    };
    const errorMessage = "Register failed";
    const loginData = {
      ok: false,
      errorMessage,
    };

    await registerUserWithEmail.mockResolvedValue(loginData);
    await startCreatingUserWithEmail(formData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout({ errorMessage }));
  });
});
