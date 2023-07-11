import { useDispatch, useSelector } from "react-redux";
import { AuthRoutes } from "../auth";
import { JournalRoutes } from "../journal";
import { CheckingAuth } from "../ui";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase";
import { login, logout } from "../store";

export const AppRouter = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());
      const { uid, email, displayName, photoURL } = user;
      dispatch(login({ uid, email, displayName, photoURL }));
    });
  }, [dispatch]);

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
