/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';
import { CaracteristicaDoProdutoDTO } from './CaracteristicaDoProduto.dto';
import { ImagemDoProdutoDTO } from './ImagemDoProduto.dto';
import { Type } from 'class-transformer';

export class DadosDeCadastroProdutoDTO {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsPositive()
  @Min(1)
  // @Matches(/ˆ\d+(\.\d{1,2})?$/)
  @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
  valor: number;

  @IsPositive()
  quantidadeDisponivel: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1000)
  descricao: string;

  @IsArray()
  @ArrayMinSize(3)
  @ValidateNested()
  @Type(() => CaracteristicaDoProdutoDTO)
  caracteristicas: CaracteristicaDoProdutoDTO[];

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested()
  @Type(() => ImagemDoProdutoDTO)
  imagens: ImagemDoProdutoDTO[];

  @IsString()
  @IsNotEmpty()
  categoria: string;
}
