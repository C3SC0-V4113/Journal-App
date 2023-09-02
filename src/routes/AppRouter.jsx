import { AuthRoutes, LoginPage, RegisterPage } from "./auth";
import { JournalRoutes } from "./journal";
import { CheckingAuth, RoutingError } from "../ui";
import { useCheckAuth } from "../hooks";
import { Navigate, redirect } from "react-router-dom";
import { AuthLayout } from "./auth/layout";
import { JournalLayout } from "./journal/layout/JournalLayout";
import { useDispatch } from "react-redux";
import { startGoogleSignIn, startLoginWithEmail } from "../store";

export const AppRouter = () => {
  const { status } = useCheckAuth();
  const dispatch = useDispatch();

  // if (status === "checking") {
  //   return [
  //     {
  //       path: "*",
  //       element: <CheckingAuth />,
  //       errorElement: <RoutingError />,
  //     },
  //   ];
  // } else {
  //   return status === "authenticated"
  //     ? [
  //         {
  //           path: "/",
  //           element: <JournalLayout />,
  //           errorElement: <RoutingError />,
  //           children: JournalRoutes,
  //         },
  //       ]
  //     : [
  //         {
  //           path: "/auth",
  //           element: <AuthLayout />,
  //           errorElement: <RoutingError />,
  //           children: AuthRoutes,
  //         },
  //         {
  //           path: "*",
  //           element: <Navigate to={"/auth"} />,
  //         },
  //       ];
  // }
  return [
    {
      id: "root",
      path: "/",
      element: <JournalLayout />,
      errorElement: <RoutingError />,
      children: JournalRoutes,
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      errorElement: <RoutingError />,
      children: [
        {
          index: true,
          element: <LoginPage />,
        },
        {
          path: "login",
          action: async ({ request }) => {
            const formData = await request.formData();
            let intent = formData.get("intent");
            let email = formData.get("email");
            let password = formData.get("password");
            switch (intent) {
              case "mail":
                console.log("Login using email");
                dispatch(startLoginWithEmail({ email, password }));
                break;
              case "google":
                console.log("Login using google");
                dispatch(startGoogleSignIn());
                break;
              default:
                break;
            }
            return redirect("/checking");
          },
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
        {
          path: "*",
          element: <Navigate to={"/auth"} />,
        },
      ],
    },
    {
      path: "/checking",
      element: <CheckingAuth />,
      errorElement: <RoutingError />,
    },
  ];
};
