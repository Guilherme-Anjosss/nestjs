import { IsNotEmpty, Length, IsInt, IsDate } from 'class-validator';

export class CreateUniversidadeDto {
  @IsNotEmpty()
  @Length(3, 255)
  razao: string;

  @IsNotEmpty()
  @Length(3, 255)
  fantasia: string;

  @IsNotEmpty()
  @IsInt()
  endereco_id: number;

}