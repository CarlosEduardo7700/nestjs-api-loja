import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
import { DadosDeCadastroUsuarioDTO } from './dto/DadosDeCadastroUsuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { v4 as uuid } from 'uuid';
import { DadosParaListagemUsuarioDTO } from './dto/DadosParaListagemUsuario.dto';
import { DadosParaAtualizacaoUsuarioDTO } from './dto/DadosParaAtualizacaoUsuario.dto';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}

  @Post()
  cadastrar(@Body() dadosDoUsuario: DadosDeCadastroUsuarioDTO): object {
    const usuarioEntity = new UsuarioEntity();

    usuarioEntity.email = dadosDoUsuario.email;
    usuarioEntity.senha = dadosDoUsuario.senha;
    usuarioEntity.nome = dadosDoUsuario.nome;
    usuarioEntity.id = uuid();

    this.usuarioRepository.salvar(usuarioEntity);

    return {
      usuario: new DadosParaListagemUsuarioDTO(
        usuarioEntity.id,
        usuarioEntity.nome,
      ),
      message: 'Usuário cadastrado com sucesso!',
    };
  }

  @Get()
  listarTodos(): DadosParaListagemUsuarioDTO[] {
    const usuariosCadastrados = this.usuarioRepository.listar();
    const listaDeUsuarios = usuariosCadastrados.map(
      (usuario) => new DadosParaListagemUsuarioDTO(usuario.id, usuario.nome),
    );

    return listaDeUsuarios;
  }

  @Put('/:id')
  atualizar(
    @Param('id') id: string,
    @Body() dadosParaAtualizar: DadosParaAtualizacaoUsuarioDTO,
  ) {
    const usuarioAtulizado = this.usuarioRepository.atualizar(
      id,
      dadosParaAtualizar,
    );

    return {
      usuario: usuarioAtulizado,
      message: 'Usuário atualizado com sucesso!',
    };
  }
}
