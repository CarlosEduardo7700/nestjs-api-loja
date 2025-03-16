/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { IsEmailUnique } from '../validacao/emailEhUnico.validator';

export class DadosParaAtualizacaoUsuarioDTO {
  @IsString({ message: 'Nome tem que ser uma string!' })
  @IsNotEmpty({ message: 'Nome não pode ser vazio!' })
  @IsOptional()
  nome: string;

  @IsEmail(undefined, { message: 'O email informado é inválido!' })
  @IsEmailUnique({ message: 'Esse email já está cadastrado!' })
  @IsOptional()
  email: string;

  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres!' })
  @IsOptional()
  senha: string;
}
