import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Min,
} from 'class-validator';
export class CreateUserDto {
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  @Min(3)
  first_name: string;

  @IsNotEmpty()
  @IsString()
  @Min(3)
  last_name: string;

  @IsEmail()
  @IsString()
  email:string;

  @IsString()
  @Min(8)
  password: string;

}
