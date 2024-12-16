import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Comment extends Document {
  @Prop({required: true, unique: true})
  id: string;
  
  @Prop({ required: true })
  user_id: string;

  @Prop({ required: true })
  content: string;

  @Prop({required: true})
  post_id: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);