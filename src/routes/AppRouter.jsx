import { AuthRoutes } from "./auth";
import { JournalRoutes } from "./journal";
import { CheckingAuth, RoutingError } from "../ui";
import { useCheckAuth } from "../hooks";
import { Navigate } from "react-router-dom";
import { AuthLayout } from "./auth/layout";
import { JournalLayout } from "./journal/layout/JournalLayout";

export const AppRouter = () => {
  const { status } = useCheckAuth();

  if (status === "checking") {
    return [
      {
        path: "*",
        element: <CheckingAuth />,
        errorElement: <RoutingError />,
      },
    ];
  } else {
    return status === "authenticated"
      ? [
          {
            path: "/",
            element: <JournalLayout />,
            errorElement: <RoutingError />,
            children: JournalRoutes,
          },
          {
            path: "*",
            element: <Navigate to={"/"} />,
          },
        ]
      : [
          {
            path: "/auth",
            element: <AuthLayout />,
            errorElement: <RoutingError />,
            children: AuthRoutes,
          },
          {
            path: "*",
            element: <Navigate to={"/auth"} />,
          },
        ];
  }
};
