import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({required: true, unique: true})
  id: string;
  
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  password: string;

  @Prop({required: true, unique: true})
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save', function (next) {
  const user = this as User;
  if (user.password.length < 8) {
    throw new Error('Password must be at least 6 characters long');
  }
  next();
});
