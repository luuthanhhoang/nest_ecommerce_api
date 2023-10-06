import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UserSignup {
  @IsNotEmpty({ message: 'Tên không được để trống' })
  @IsString({ message: 'Tên phải là một chuỗi' })
  name: string;

  @IsNotEmpty({ message: 'Email không được để trống' })
  @IsEmail({}, { message: 'Email không đúng định dạng' })
  email: string;

  @IsNotEmpty({ message: 'Mật khẩu không được để trống' })
  @MinLength(5, { message: 'Mật khẩu không được ít hơn 5 kí tự' })
  password: string;
}
