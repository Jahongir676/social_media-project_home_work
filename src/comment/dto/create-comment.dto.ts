import {
    IsNotEmpty,
    IsString,
  } from 'class-validator';

export class CreateCommentDto {
    @IsString()
    id: string;
  
    @IsNotEmpty()
    @IsString()
    user_id: string;
  
    @IsString()
    content: string;

    @IsNotEmpty()
    @IsString()
    post_id: string;
}
  