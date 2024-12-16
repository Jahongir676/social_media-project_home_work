import {
  IsNotEmpty,
  IsString,
  IsUUID,
  Min,
} from 'class-validator';
export class CreatePostDto {
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsUUID()
  @IsString()
  user_id: string;

  @IsNotEmpty()
  @IsString()
  @Min(3)
  title: string;

  @IsNotEmpty()
  @IsString()
  content:string;

  @IsString()
  @Min(3)
  slug: string;

}
