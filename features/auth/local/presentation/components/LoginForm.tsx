'use client';

import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { LoginFormValues } from '../../domain/login.schema';
import { useLogin } from '../../application/usecases/loginUser';
import Image from 'next/image';
import MovingDotsScene from '@/components/custom-components/scene/scene';
import { CustomButton } from '@/components/extended/extended-button';

interface loginProps {
  tenant: string;
}

const LoginForm = ({ tenant }: loginProps) => {
  const form = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { mutate, isPending } = useLogin(tenant);

  const onSubmit = (data: LoginFormValues) => {
    console.log(data);
    console.log(tenant);
    mutate(data);
  };

  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      {/* left section */}
      <div className="bg-blue-500 text-white p-8 md:p-12 md:w-1/2 relative overflow-hidden">
        <div className="z-10 relative">
          <h2 className="text-2xl font-bold mb-6">
            <Image
              src="/logo/Nepcare.png"
              width={50}
              height={50}
              alt="Picture of the author"
              className="rounded-full"
            />
          </h2>
          <div className="mt-20 md:mt-32">
            <h1 className="text-4xl md:text-3xl font-bold mb-4">
              NepCare Doctor Portal
            </h1>
            <h2 className="text-xl md:text-xl font-semibold mb-6">
              Secure access for registered medical professionals.
            </h2>
            <p className="max-w-md opacity-90">
              Manage appointments, review patient records, and provide quality
              care through a secure clinical platform.
            </p>
          </div>
        </div>
        <div className="absolute inset-0">
          <MovingDotsScene />
        </div>
      </div>
      {/* right section */}
      <div className="p-8 md:p-12 md:w-1/2 flex items-center justify-center">
        <div className="w-full h-full max-w-md rounded-2xl bg-white p-18 shadow-xl">
          {/* Header */}
          <div className="mb-8 text-center">
            {/* <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1> */}
            <p className=" text-sm text-gray-500">
              Sign in to your doctor account
            </p>
          </div>

          {/* Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FloatingLabelFormInput
                form={form}
                name="email"
                label="Email"
                type="email"
              />

              <FloatingLabelFormInput
                form={form}
                name="password"
                label="Password"
                type="password"
              />

              {/* Actions */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-600">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  Remember me
                </label>

                <button
                  type="button"
                  className="text-indigo-600 hover:text-indigo-500 font-medium"
                >
                  Forgot password?
                </button>
              </div>

              {/* Submit */}
              <CustomButton
                type="submit"
                disabled={isPending}
                className="w-full cursor-pointer"
                size="lg"
              >
                {isPending ? 'Logging in...' : 'Login'}
              </CustomButton>
            </form>
          </Form>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Don’t have an account?{' '}
            <span className="font-medium text-indigo-600 cursor-pointer hover:underline">
              Sign up
            </span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default LoginForm;
