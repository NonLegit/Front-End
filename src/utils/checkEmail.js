export const EmailFormat = (email) => {
  if (/\S+@\S+\.\S+/.test(email)) return true;
  return false;
};
