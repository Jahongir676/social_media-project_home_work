import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentModule } from './comment/comments.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    PostModule,
    UserModule,
    CommentModule,
    MongooseModule.forRoot(
      'mongodb+srv://jahongir:qwer1234@cluster0.rgtrd.mongodb.net/',
    ),
  ],
})
export class AppModule {}
