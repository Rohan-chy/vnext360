'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  RegisterFormValues,
  registerSchema,
} from '../../domain/register.schema';
import { useRegister } from '../hook/useRegister';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { Form } from '@/components/ui/form';
// import { useEffect } from 'react';
// import { FloatingLabelFormInput } from '@/components/custom-components/form-input';

export default function RegisterForm({ tenant }: { tenant: string }) {
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      userName: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
    },
  });

  const { mutate, isPending } = useRegister(tenant);

  const onSubmit = (values: RegisterFormValues) => {
    mutate(values);
  };

  return (
    <div className="flex justify-center px-4 py-10">
      <div className="w-full max-w-2xl rounded-xl border bg-background p-6 shadow-sm">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create your account
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Register to continue as a {tenant}
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal Info */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FloatingLabelFormInput
                form={form}
                name="firstName"
                label="First Name"
              />
              <FloatingLabelFormInput
                form={form}
                name="lastName"
                label="Last Name"
              />
            </div>

            {/* Account Info */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FloatingLabelFormInput form={form} name="email" label="Email" />
              <FloatingLabelFormInput
                form={form}
                name="userName"
                label="Username"
              />
            </div>

            {/* Passwords */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FloatingLabelFormInput
                form={form}
                name="password"
                label="Password"
                type="password"
              />
              <FloatingLabelFormInput
                form={form}
                name="confirmPassword"
                label="Confirm Password"
                type="password"
              />
            </div>

            {/* Contact */}
            <FloatingLabelFormInput
              form={form}
              name="phoneNumber"
              label="Phone Number"
            />

            {/* Submit */}
            <Button
              type="submit"
              disabled={isPending}
              className="w-full"
              size="lg"
            >
              {isPending ? 'Creating account…' : 'Create Account'}
            </Button>

            {/* Footer */}
            <p className="text-center text-xs text-muted-foreground">
              By creating an account, you agree to our Terms & Privacy Policy.
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
}
