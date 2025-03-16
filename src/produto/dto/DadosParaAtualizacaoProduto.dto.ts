/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';
import { CaracteristicaDoProdutoDTO } from './CaracteristicaDoProduto.dto';
import { ImagemDoProdutoDTO } from './ImagemDoProduto.dto';
import { Type } from 'class-transformer';

export class DadosParaAtualizacaoProdutoDTO {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  nome: string;

  @IsPositive()
  @Min(1)
  // @Matches(/ˆ\d+(\.\d{1,2})?$/)
  @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
  @IsOptional()
  valor: number;

  @IsPositive()
  @IsOptional()
  quantidadeDisponivel: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1000)
  @IsOptional()
  descricao: string;

  @IsArray()
  @ArrayMinSize(3)
  @ValidateNested()
  @Type(() => CaracteristicaDoProdutoDTO)
  @IsOptional()
  caracteristicas: CaracteristicaDoProdutoDTO[];

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested()
  @Type(() => ImagemDoProdutoDTO)
  @IsOptional()
  imagens: ImagemDoProdutoDTO[];

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  categoria: string;
}
