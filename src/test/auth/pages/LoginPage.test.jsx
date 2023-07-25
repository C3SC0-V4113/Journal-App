import { render, screen } from "@testing-library/react";
import { LoginPage } from "../../../auth/pages/LoginPage";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../../../store";
import { MemoryRouter } from "react-router-dom";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
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

    expect(screen.getAllByAltText("Login").length).toBeGreaterThanOrEqual(1);
  });
});
