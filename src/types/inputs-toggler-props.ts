type InputsTogglerProps = {
  open: string;
  registerSetOpen?: (value: "Candidate" | "Company") => void;
  loginSetOpen?: (value: "EmailPassword" | "PasswordLess") => void;
};
