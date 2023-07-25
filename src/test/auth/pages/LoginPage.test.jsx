import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../../auth/pages/LoginPage";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../../../store";
import { MemoryRouter } from "react-router-dom";
import { notAuthenticatedState } from "../../fixtures/authFixtures";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  preloadedState: notAuthenticatedState,
});

describe("Pruebas en <LoginPage/>", () => {
  test("debe de mostrar el componente correctamente", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    // screen.debug();

    expect(screen.getAllByText("Login").length).toBeGreaterThanOrEqual(1);
  });

  test("Botón de Google debe de llamar startGoogleSignIn", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const googleBtn = screen.getByLabelText("google-sign-in");
    // console.log(googleBtn);
    fireEvent.click(googleBtn);

    console.log(store.getState());
  });
});
