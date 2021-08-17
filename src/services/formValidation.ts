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
