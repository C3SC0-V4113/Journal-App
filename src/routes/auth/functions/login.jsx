//import { useDispatch } from "react-redux";
import { redirect } from "react-router-dom";

export async function ActionLogin({ request }) {
  //const dispatch = useDispatch();
  const formData = await request.formData();
  let intent = formData.get("intent");
  let email = formData.get("email");
  let password = formData.get("password");
  switch (intent) {
    case "mail":
      console.log("Login using email");
      console.log(email, password);
      break;
    case "google":
      console.log("Login using google");
      break;
    default:
      break;
  }
  return redirect("/");
  //   const updates = Object.fromEntries(formData);
  //   await updateContact(params.contactId, updates);
  //   return redirect(`/contacts/${params.contactId}`);
}

export async function LoaderLogin() {}
