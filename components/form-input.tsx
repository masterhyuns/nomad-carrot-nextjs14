import { FC } from 'react'

interface FormInputProps {
  type: string
  placeholder: string
  required: boolean
  errors?: string[]
  name: string
}
const FormInput: FC<FormInputProps> = ({
  type,
  placeholder,
  required,
  errors,
  name,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <input
        className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-2 focus:ring-4 transition
        ring-neutral-200 focus:ring-orange-500 border-none placeholder:text-neutral-400"
        type={type}
        placeholder={placeholder}
        required={required}
        name={name}
      />
      <span className="flex flex-col gap-2 text-red-500 font-medium">
        {errors &&
          errors.map((error, index) => (
            <span key={index} className={'text-red-500 font-medium'}>
              {error}
            </span>
          ))}
      </span>
    </div>
  )
}

export default FormInput
