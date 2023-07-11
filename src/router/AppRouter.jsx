import { AuthRoutes } from "../auth";
import { JournalRoutes } from "../journal";
import { CheckingAuth } from "../ui";
import { useCheckAuth } from "../hooks";
import { Navigate } from "react-router-dom";

export const AppRouter = () => {
  const { status } = useCheckAuth();

  if (status === "checking") {
    return [
      {
        path: "*",
        element: <CheckingAuth />,
      },
    ];
  } else {
    return status === "authenticated"
      ? [
          {
            path: "/",
            children: JournalRoutes,
          },
        ]
      : [
          {
            path: "/auth",
            children: AuthRoutes,
          },
          {
            path: "/",
            element: <Navigate to={"/auth/login"} />,
          },
        ];
  }
};
