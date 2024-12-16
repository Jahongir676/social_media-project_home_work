import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './schema/comments.schema';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Comment.name) private readonly CommentModel: Model<Comment>
  ) {}

  async create(createCommentDto: CreateCommentDto) {
    const newComment = new this.CommentModel(CreateCommentDto);
    return newComment.save();
  }

  async findAll() {
    return this.CommentModel.find().exec();
  }

  async findOne(id: string) {
    const comment = await this.CommentModel.findById(id).exec();
    if (!comment) {
      throw new NotFoundException(`Comment with ID ${id} not found`);
    }
    return comment;
  }

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    const comment = await this.CommentModel.findByIdAndUpdate(id, UpdateCommentDto, {
      new: true,
    }).exec();
    if (!comment) {
      throw new NotFoundException(`Comment with ID ${id} not found`);
    }
    return comment;
  }

  async remove(id: string): Promise<String> {
    const comment = await this.CommentModel.findById(id).exec();
    if (!comment) {
      throw new NotFoundException(`Comment with ID ${id} not found`);
    }
    await comment.deleteOne()
    return "Comment deleted succesfuly"
  }
}
