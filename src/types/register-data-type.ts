type RegisterData = {
  tab: "Company" | "Candidate";
  username: string;
  email: string;
  passwordOne: string;
  passwordTwo: string;
  company: string;
  contactName: string;
  workMail: string;
  phoneNumber: string;
  city: string;
};
type RegisterDataSetter = {
  setRegisterData: (data: Partial<RegisterData>) => void;
};
