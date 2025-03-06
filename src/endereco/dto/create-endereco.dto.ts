import { IsNotEmpty, Length } from 'class-validator';

export class CreateEnderecoDto {
  @IsNotEmpty()
  @Length(8, 255)
  cep: string;

  @IsNotEmpty()
  @Length(3, 255)
  cidade: string;

  @IsNotEmpty()
  @Length(2, 255)
  uf: string;

  @IsNotEmpty()
  @Length(3, 255)
  logradouro: string;

  @IsNotEmpty()
  @Length(3, 255)
  bairro: string;

  @IsNotEmpty()
  @Length(1, 255)
  numero: string;

  @IsNotEmpty()
  @Length(0, 255)
  complemento: string;
}
