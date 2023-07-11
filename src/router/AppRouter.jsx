import { useSelector } from "react-redux";
import { AuthRoutes } from "../auth";
import { JournalRoutes } from "../journal";
import { CheckingAuth } from "../ui";

export const AppRouter = () => {
  const { status } = useSelector((state) => state.auth);
  if (status === "checking") {
    return [
      {
        path: "*",
        element: <CheckingAuth />,
      },
    ];
  } else {
    return [
      {
        path: "/auth",
        children: AuthRoutes,
      },
      {
        path: "/",
        children: JournalRoutes,
      },
    ];
  }
};
