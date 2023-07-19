export const fileUpload = async (file) => {
  // if (!file) throw new Error("No tenemos ningun archivo");
  if (!file) return null;

  const cloudURL = `https://api.cloudinary.com/v1_1/cesco-dev/upload`;
  const formData = new FormData();
  formData.append("upload_preset", "react-journal");
  formData.append("file", file);

  try {
    const resp = await fetch(cloudURL, {
      method: "POST",
      body: formData,
    });

    if (!resp.ok) throw new Error("No se pudo subir imagen");
    const cloudResponse = await resp.json();

    return cloudResponse.secure_url;
  } catch (error) {
    // console.error(error);
    // throw new Error(error.message);
    return null;
  }
};
