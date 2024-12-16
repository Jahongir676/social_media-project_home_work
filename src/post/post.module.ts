import { Module } from '@nestjs/common';
import { postService } from './post.service';
import { PostController } from './post.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { post, PostSchema } from './schema/post.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: post.name, schema: PostSchema}])],
  controllers: [PostController],
  providers: [postService],
})
export class PostModule {}
