/* eslint-disable no-undef */
export const getEnvironments = () => {
  console.log(import.meta.env);
  return {
    ...import.meta.env,
  };
};
