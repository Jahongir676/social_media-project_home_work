import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { post } from './schema/post.schema';

@Injectable()
export class postService {
  constructor(
    @InjectModel(post.name) private readonly postModel: Model<post>
  ) {}

  async create(createPostDto: CreatePostDto) {
    const newPost = new this.postModel(CreatePostDto);
    return newPost.save();
  }

  async findAll() {
    return this.postModel.find().exec();
  }

  async findOne(id: string) {
    const post = await this.postModel.findById(id).exec();
    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return post;
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    const post = await this.postModel.findByIdAndUpdate(id, UpdatePostDto, {
      new: true,
    }).exec();
    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return post;
  }

  async remove(id: string): Promise<String> {
    const post = await this.postModel.findById(id).exec();
    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    await post.deleteOne()
    return "Post deleted succesfuly"
  }
}
