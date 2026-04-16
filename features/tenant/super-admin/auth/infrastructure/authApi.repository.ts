export type RegisterPayload = {
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
};

export const registerUserApi = async (payload: RegisterPayload) => {
  // Call the Next.js API route directly
  const res = await fetch(`/api/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
    credentials: 'include', // send cookies if needed
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || 'Registration failed');
  }

  return res.json();
};
