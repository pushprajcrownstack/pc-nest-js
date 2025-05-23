import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';
import { EditPostDto } from './dtos/edit-post.dto';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(
    /*
     *  Injecting Posts Service
     */
    private readonly postsService: PostsService,
  ) {}

  /*
   * GET localhost:3000/posts/:userId
   */
  @Get('/:userId')
  public getPosts(@Param('userId') userId: string) {
    return this.postsService.findAll(userId);
  }

  @ApiOperation({
    summary: 'Creaet a new blog post',
  })
  @ApiResponse({
    status: 201,
    description:
      'You will get a 201 status cod eif you post created sucessfully.',
  })
  @Post()
  public createPost(@Body() createPostDto: CreatePostDto) {
    console.log('createPost', createPostDto);
  }

  @ApiOperation({
    summary: 'Updates an existing blog post',
  })
  @ApiResponse({
    status: 201,
    description: 'You will get a 201 status when blog post is updated.',
  })
  @Patch()
  public editPost(@Body() editPostDto: EditPostDto) {
    console.log('editPostDto', editPostDto);
  }
}
