import { registerUserApi } from '../../infrastructure/authApi.repository';
import { RegisterUserInput } from './registerUser.dto';

export const registerUserUseCase = async ({ data }: RegisterUserInput) => {
  console.log('trigger');
  console.log(data);
  return registerUserApi(data);
};
