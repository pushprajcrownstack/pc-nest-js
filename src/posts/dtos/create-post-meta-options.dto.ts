import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostMetaOptionsDTO {
  @IsNotEmpty()
  @IsString()
  key: string;

  @IsNotEmpty()
  value: any;
}
