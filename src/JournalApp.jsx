import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter";

export const JournalApp = () => {
  const router = createBrowserRouter(AppRouter());

  return <RouterProvider router={router} />;
};
