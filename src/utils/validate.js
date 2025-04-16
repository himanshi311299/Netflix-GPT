export const checkValidData = (email, password, fullname) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  
    const isFullNameValid =
      fullname === null || fullname === undefined ? true : /^[A-Z][a-z]+(\s[A-Z][a-z]?){0,}/.test(fullname.trim());
  
    if (!isEmailValid) return "Email ID is not valid";
    if (!isPasswordValid) return "Password is not valid";
    if (!isFullNameValid) return "Full Name is not valid";
  
    return null;
  };
  