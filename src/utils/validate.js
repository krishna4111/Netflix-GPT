export const signInValidation = (email, password) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = passwordRegex.test(password);

  if (!isEmailValid) {
    return "Email ID is not valid";
  }
  if (!isPasswordValid) {
    return "Password is not valid";
  }

  return null;
};

export const signUpValidation = (name, email, password) => {
  const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = passwordRegex.test(password);
  const isNameValid = usernameRegex.test(name);

  if (!isEmailValid) {
    return "Email ID is not valid";
  }
  if (!isPasswordValid) {
    return "Password is not valid";
  }
  if (!isNameValid) {
    return "User name is not valid";
  }

  return null;
};
