/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class ImagemDoProdutoDTO {
  @IsUrl()
  url: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;
}
