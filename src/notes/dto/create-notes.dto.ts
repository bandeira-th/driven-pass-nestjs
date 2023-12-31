import { IsNotEmpty, IsString } from 'class-validator';

export class CreateNoteDto {
  @IsNotEmpty()
  @IsString()
  text: string;

  @IsString()
  @IsNotEmpty()
  title: string;
}
