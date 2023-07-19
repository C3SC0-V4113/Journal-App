import { fileUpload } from "../../helpers";

describe("Pruebas en fileUpload", () => {
  test("Debe de subir el archivo correctamente a Cloudinary", async () => {
    const imageUrl =
      "https://static.wikia.nocookie.net/metalgear/images/1/16/Venom_Snake.Motherbase.jpg/revision/latest?cb=20210324042507";
    const resp = await fetch(imageUrl);
    const blob = await resp.blob();
    const file = new File([blob], "foto.jpg");

    const url = await fileUpload(file);
    expect(typeof url).toBe("string");
  });
});
