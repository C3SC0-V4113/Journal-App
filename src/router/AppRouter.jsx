import { AuthRoutes } from "../auth";
import { JournalRoutes } from "../journal";

export const AppRouter = [
  {
    path: "/auth",
    children: AuthRoutes,
  },
  {
    path: "/",
    children: JournalRoutes,
  },
];
