import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePostDto } from './create-post.dto';
import { IsInt, IsNotEmpty } from 'class-validator';

export class EditPostDto extends PartialType(CreatePostDto) {
  @ApiProperty({
    description: 'The ID of the post that needs to be updated',
  })
  @IsNotEmpty()
  @IsInt()
  id: number;
}
