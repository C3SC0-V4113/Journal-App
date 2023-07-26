import { AuthRoutes } from "../auth";
import { JournalRoutes } from "../journal";
import { CheckingAuth, RoutingError } from "../ui";
import { useCheckAuth } from "../hooks";
import { Navigate } from "react-router-dom";

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
            errorElement: <RoutingError />,
            children: JournalRoutes,
          },
        ]
      : [
          {
            path: "/auth",
            errorElement: <RoutingError />,
            children: AuthRoutes,
          },
          {
            path: "/",
            element: <Navigate to={"/auth/login"} />,
          },
        ];
  }
};
