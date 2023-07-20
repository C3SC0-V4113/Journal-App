import { v2 as cloudinary } from "cloudinary";
import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({
  cloud_name: "cesco-dev",
  api_key: "189933462637221",
  api_secret: "tbp8q47e2jZArOAjPS9j2i-RlCM",
  secure: true,
});

describe("Pruebas en fileUpload", () => {
  test("Debe de subir el archivo correctamente a Cloudinary", async () => {
    const imageUrl =
      "https://images.unsplash.com/photo-1682686578842-00ba49b0a71a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80";
    const resp = await fetch(imageUrl);
    const blob = await resp.blob();
    const file = new File([blob], "foto.jpg");

    const url = await fileUpload(file);
    expect(typeof url).toBe("string");

    // Cleaning uploaded file
    const segments = url.split("/");
    const imageId = segments[segments.length - 1].replace(".jpg", "");
    await cloudinary.api.delete_resources(["journal-app/" + imageId]);
  }, 20000);

  test("debe de retornal null", async () => {
    const file = new File([], "foto.jpg");

    const url = await fileUpload(file);
    expect(url).toBe(null);
  });
});
