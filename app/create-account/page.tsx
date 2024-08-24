'use client';
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import FormInput from '@/components/form-input';
import FormButton from '@/components/form-btn';
import { useFormState } from 'react-dom';
import { createAccount } from '@/app/create-account/action';
const CreateAccount = () => {
  const [state, dispatch] = useFormState(createAccount, null);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        <FormInput
          type={'text'}
          name={'username'}
          placeholder={'Username'}
          required
          errors={state?.fieldErrors.username}
        />
        <FormInput
          type={'email'}
          name={'email'}
          placeholder={'Email'}
          required
          errors={state?.fieldErrors.email}
        />
        <FormInput
          type={'password'}
          name={'password'}
          placeholder={'Password'}
          required
          errors={state?.fieldErrors.password}
        />
        <FormInput
          type={'password'}
          name={'confirm_password'}
          placeholder={'Password Confirm'}
          required
          errors={state?.fieldErrors.confirm_password}
        />
        <FormButton text={'Save Account'} />
      </form>

      <div className="w-full h-px bg-neutral-500" />
      <div>
        <Link
          className="primary-btn flex h-10 items-center justify-center gap-2"
          href="/sms">
          <span>
            <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />
          </span>
          <span>Sign up with SMS</span>
        </Link>
      </div>
    </div>
  );
};

export default CreateAccount;
