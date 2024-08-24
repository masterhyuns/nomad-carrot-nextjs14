'use server';
import { string, z } from 'zod';
const checkUsername = (username: string) => {
  return !username.includes('potato');
};
const checkPassword = ({
  password,
  confirm_password,
}: {
  password: string;
  confirm_password: string;
}) => {
  return password === confirm_password;
};

//const usernameSchema = z.string().min(5).max(10);
const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: '문자열만',
        required_error: 'username 이 없다.',
      })
      .min(3, '3자 이상')
      .max(10, '10자 미만')
      .refine(checkUsername, 'potato error'),

    email: z.string().email('이메일 형식만 '),
    password: z.string().min(10, '10자 이상'),
    confirm_password: z.string().min(10, '10자 이상'),
  })
  .refine(checkPassword, {
    message: '비밀번호 다르네',
    path: ['confirm_password'],
  });

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirm_password: formData.get('confirm_password'),
  };
  //const usernameValid = usernameSchema.parse(data.username);
  // formSchema.parse(data); // exception 처리를 한다.
  const result = formSchema.safeParse(data); // 직접 처리 한다.
  if (!result.success) {
    //console.log('result => ', result.error);
    console.log('result => ', result.error.flatten());
    return result.error.flatten();
  }
}
