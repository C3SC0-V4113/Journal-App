/* eslint-disable no-undef */
export const getEnvironments = () => {
  //import.meta.env;
  return {
    VITE_APIKEY,
    VITE_AUTHDOMAIN,
    VITE_PROJECTID,
    VITE_STORAGEBUCKET,
    VITE_MESSAGINGSENDERID,
    VITE_APPID,
  };
};
