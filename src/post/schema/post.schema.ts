import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class post extends Document {
  @Prop({required: true, unique: true})
  id: string;
  
  @Prop({ required: true })
  user_id: string;

  @Prop({ required: true })
  title: string;

  @Prop({required: true})
  content: string;

  @Prop({required: true})
  slug: string;
}

export const PostSchema = SchemaFactory.createForClass(post);