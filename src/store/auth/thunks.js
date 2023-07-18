import {
  loginWithEmail,
  logoutFirebase,
  registerUserWithEmail,
  signInWithGoogle,
} from "../../firebase";
import { clearNotesLogout } from "../journal";
import { checkingCredentials, login, logout } from "./";

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await signInWithGoogle();
    if (!result.ok) {
      return dispatch(logout({ errorMessage: result.errorMessage }));
    }

    return dispatch(login(result));
  };
};

export const startCreatingUserWithEmail = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const { ok, uid, photoURL, errorMessage } = await registerUserWithEmail({
      email,
      password,
      displayName,
    });

    if (!ok) return dispatch(logout({ errorMessage }));

    dispatch(login({ uid, displayName, email, photoURL }));
  };
};

export const startLoginWithEmail = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await loginWithEmail({ email, password });

    if (!result.ok)
      return dispatch(logout({ errorMessage: result.errorMessage }));

    return dispatch(login(result));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    await logoutFirebase();

    dispatch(clearNotesLogout());
    dispatch(logout({ errorMessage: "" }));
  };
};
