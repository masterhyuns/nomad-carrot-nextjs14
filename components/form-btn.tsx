'use client'
import { FC } from 'react'
import { useFormStatus } from 'react-dom'

interface FormButtonProps {
  text: string
}

const FormButton: FC<FormButtonProps> = ({ text }) => {
  // action 을 실행 하는 form 과 같은 곳에서 사용할 수 없어
  // form 의 자식 에서만 사용할 수 있다.
  const { pending } = useFormStatus()
  return (
    <button
      disabled={pending}
      type={'submit'}
      className="primary-btn h-10 disabled:bg-neutral-400 disabled:text-neutral-300 disabled:cursor-not-allowed">
      {pending ? 'Loading...' : text}
    </button>
  )
}

export default FormButton
