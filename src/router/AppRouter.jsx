import { AuthRoutes } from "../auth";
import { JournalRoutes } from "../journal";
import { CheckingAuth } from "../ui";
import { useCheckAuth } from "../hooks";

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
        ];
  }
};
