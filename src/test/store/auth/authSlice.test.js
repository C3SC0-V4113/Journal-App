import {
  authSlice,
  checkingCredentials,
  login,
  logout,
} from "../../../store/auth/authSlice";
import {
  authenticatedState,
  demoUser,
  initialState,
  notAuthenticatedState,
} from "../../fixtures/authFixtures";

describe("Pruebas en authSlice.js", () => {
  test('Debe de regresar el estado inicial y llamarse "auth"', () => {
    expect(authSlice.name).toBe("auth");

    const state = authSlice.reducer(initialState, {});

    expect(state).toEqual(initialState);
  });

  test("debe realizar la autenticación", () => {
    const state = authSlice.reducer(initialState, login(demoUser));
    expect(state).toEqual(authenticatedState);
  });

  test("debe de realizar el logout sin argumentos", () => {
    const state = authSlice.reducer(authenticatedState, logout());
    expect(state).toEqual(notAuthenticatedState);
  });

  test("debe de realizar el logout y mostrar un mensaje de error", () => {
    const errorMessage = "Credenciales son incorrectas";
    const state = authSlice.reducer(
      authenticatedState,
      logout({ errorMessage })
    );
    expect(state).toEqual({
      status: "not-authenticated",
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage,
    });
  });

  test("debe de cambiar el estado a checking", () => {
    const state = authSlice.reducer(authenticatedState, checkingCredentials());
    expect(state.status).toBe("checking");
  });
});
