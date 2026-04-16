import { jwtDecode } from 'jwt-decode';

export type UserFromToken = {
  name: string;
  email: string;
  image: string;
  role: string;
};

type TokenPayload = {
  fullName?: string;
  emailaddress?: string; // your token has this claim
  'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'?: string;
  'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'?: string;
  'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/mobilephone'?: string;
  'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'?: string;
  image_url?: string; // if your token has it
};

export const getUserFromToken = (token: string): UserFromToken => {
  const decoded = jwtDecode<TokenPayload>(token);

  return {
    name:
      decoded.fullName ||
      decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'] ||
      '',
    email:
      decoded.emailaddress ||
      decoded[
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'
      ] ||
      '',
    image: decoded.image_url || '',
    role:
      decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] ||
      'Basic',
  };
};
