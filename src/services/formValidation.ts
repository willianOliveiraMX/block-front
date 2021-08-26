export const validURL = (str: string): boolean => {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
};

export const passwordValidation = (password: string): boolean => {
  if (password.length < 2 || password.length > 60) return false;
  const passwordRegexValidation =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

  const isValisRegex = password.match(passwordRegexValidation);
  if (isValisRegex?.length) return true;

  return false;
};

const emailValidation = (email: string): boolean => {
  if (email.length < 2 || email.length > 60) return false;

  const emailRegexValidation =
    /[a-zA-Z0-9]+[/_\]+[.]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}/;

  const isValidRegex = email.match(emailRegexValidation);
  if (isValidRegex?.length) return true;

  return false;
};

export default emailValidation;
