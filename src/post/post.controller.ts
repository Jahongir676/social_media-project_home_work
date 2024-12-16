import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { postService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { post } from './schema/post.schema';

@Controller('user')
export class PostController {
  constructor(private readonly postService: postService) {}

  @Post()
  create(@Body() CreatePostDto: CreatePostDto): Promise<post> {
    return this.postService.create(CreatePostDto);
  }

  @Get()
  findAll(): Promise<post[]> {
    return this.postService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<post> {
    return this.postService.findOne(id);
  }

  @Patch(':id') 
  update(@Param('id') id: string, @Body() UpdatePostDto: UpdatePostDto): Promise<post> {
    return this.postService.update(id, UpdatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<String> {
    return this.postService.remove(id);
  }
}