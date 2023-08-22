import { Navigate } from "react-router-dom";
import { LoginPage, RegisterPage } from "../pages";
import { ActionLogin } from "../functions/login";

export const AuthRoutes = [
  {
    index: true,
    element: <LoginPage />,
  },
  {
    path: "login",
    action: ActionLogin,
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
  {
    path: "*",
    element: <Navigate to={"/auth"} />,
  },
];
