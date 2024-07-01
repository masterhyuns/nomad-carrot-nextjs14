import FormButton from '@/components/form-btn'
import FormInput from '@/components/form-input'
import SocialLogin from '@/components/social-login'

export default function LogIn() {
  const handleForm = async (formData: FormData) => {
    'use server'
    // 서버에서만 실행되도록 만들어 줌 (반드시 async 를 추가 해야 한다.
    console.log('i run it server', formData)
    console.log('email', formData.get('email'))
    console.log('password', formData.get('password'))
  }
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Log in with email and password.</h2>
      </div>
      <form className="flex flex-col gap-3" action={handleForm} method={'POST'}>
        <FormInput
          name={'email'}
          type="email"
          placeholder="Email"
          required
          errors={[]}
        />
        <FormInput
          type="password"
          name={'password'}
          placeholder="Password"
          required
          errors={[]}
        />
        <FormButton loading={false} text="Log in" />
      </form>

      <SocialLogin />
    </div>
  )
}
