import { Navigate } from "react-router-dom";
import { NoteView, NothingSelectedView } from "../views";

export const JournalRoutes = [
  {
    index: true,
    element: <NothingSelectedView />,
  },
  { path: "note/:journalId", element: <NoteView /> },
  {
    path: "*",
    element: <Navigate to={"/"} />,
  },
];
