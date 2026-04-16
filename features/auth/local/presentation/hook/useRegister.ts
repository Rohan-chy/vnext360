import { useMutation } from '@tanstack/react-query';
import { RegisterPayload } from '../../infrastructure/authApi.repository';

export const useRegister = (tenant: string) => {
  return useMutation({
    mutationFn: async (payload: RegisterPayload) => {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-tenant': tenant,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message);
      }

      return res.json();
    },
  });
};
