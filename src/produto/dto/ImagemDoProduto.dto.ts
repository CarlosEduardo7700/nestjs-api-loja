/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { ProdutoEntity } from '../produto.entity';

export class ImagemDoProdutoDTO {
  id: string;

  @IsUrl()
  url: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;

  produto: ProdutoEntity;
}
