/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsString } from 'class-validator';

export class CaracteristicaDoProdutoDTO {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;
}
