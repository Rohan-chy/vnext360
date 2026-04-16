export type RegisterUserInput = {
  data: {
    firstName: string;
    lastName: string;
    email: string;
    userName: string;
    password: string;
    confirmPassword: string;
    phoneNumber: string;
  };
  tenant: string;
};
