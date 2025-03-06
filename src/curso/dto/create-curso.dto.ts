import { IsNotEmpty, Length, IsInt, IsDate } from 'class-validator';

export class CreateCursoDto {
  @IsNotEmpty()
  @Length(3, 255)
  nome: string;

  @IsNotEmpty()
  @Length(3, 255)
  universidade_id: string;

  @IsNotEmpty()
  @IsInt()
  endereco_id: number;
}