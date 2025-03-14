import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
import { DadosDeCadastroUsuarioDTO } from './dto/DadosDeCadastroUsuario.dto';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}

  @Post()
  cadastrar(@Body() dadosDoUsuario: DadosDeCadastroUsuarioDTO): object {
    this.usuarioRepository.salvar(dadosDoUsuario);
    return dadosDoUsuario;
  }

  @Get()
  listarTodos(): object[] {
    return this.usuarioRepository.listar();
  }
}
