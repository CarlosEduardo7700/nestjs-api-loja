/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsString } from 'class-validator';
import { ProdutoEntity } from '../produto.entity';

export class CaracteristicaDoProdutoDTO {
  id: string;

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;

  produto: ProdutoEntity;
}
