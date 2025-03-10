import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  //   @Get()
  //   public getAllUsers() {
  //     return 'get request to get all users';
  //   }

  @Get('{/:id}') // Before express js 5, @Get('/:id?')
  public getUser(@Param() params: any, @Query() query: any) {
    console.log('param', params);
    console.log('query', query);

    return 'get request to get all users';
  }

  @Post()
  public createUser(@Body() body: any) {
    console.log('body', body);
    return 'Post request to create a user';
  }

  @Put()
  public updateUsers() {
    return 'Put request to update the user';
  }

  @Delete()
  public deleteUsers() {
    return 'get request to delete a user';
  }
}
