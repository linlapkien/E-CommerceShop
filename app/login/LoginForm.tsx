'use client';

import { useEffect, useState } from 'react';
import Heading from '../components/Heading';
import Input from '../components/inputs/Input';
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';
import Button from '../components/Button';
import Link from 'next/link';
import { AiOutlineGoogle } from 'react-icons/ai';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { SafeUser } from '@/types';

interface LoginFormProps {
  currentUser: SafeUser | null;
}

const LoginForm: React.FC<LoginFormProps> = ({ currentUser }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const router = useRouter();

  useEffect(() => {
    // if have currentUser, we will immediately push user to cart
    // whenever user trying to go /login URl
    if (currentUser) router.push('/cart');
    router.refresh();
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    //log in using credentials
    signIn('credentials', { ...data, redirect: false }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        router.push('/cart');
        router.refresh();
        toast.success('Logged In');
      }

      if (callback?.error) {
        // any err in [...nextauth], /Invail email or pw
        toast.error(callback.error);
      }
    });
  };

  if (currentUser) {
    return <p className="text-center">Logged in. Redirecting . . .</p>;
  }

  return (
    <>
      <Heading center title="Sign in for E~Shop" />
      <Button
        outline
        label="Continue with Google"
        icon={AiOutlineGoogle}
        onClick={() => {
          signIn('google');
        }}
      />
      <hr className="bg-slate-300 w-full h-px my-4" />

      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      />
      <Button
        label={isLoading ? 'Loading' : 'Login'}
        onClick={handleSubmit(onSubmit)}
      />
      <p className="text-sm">
        Do not have an account?{' '}
        <Link className="underline" href="/register">
          Sign up
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
