import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
import { DadosDeCadastroUsuarioDTO } from './dto/DadosDeCadastroUsuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { v4 as uuid } from 'uuid';
import { DadosParaListagemUsuarioDTO } from './dto/DadosParaListagemUsuario.dto';
import { DadosParaAtualizacaoUsuarioDTO } from './dto/DadosParaAtualizacaoUsuario.dto';
import { UsuarioService } from './usuario.service';

@Controller('/usuarios')
export class UsuarioController {
  constructor(
    private usuarioRepository: UsuarioRepository,
    private usuarioService: UsuarioService,
  ) {}

  @Post()
  async cadastrar(
    @Body() dadosDoUsuario: DadosDeCadastroUsuarioDTO,
  ): Promise<object> {
    const usuarioEntity = new UsuarioEntity();

    usuarioEntity.email = dadosDoUsuario.email;
    usuarioEntity.senha = dadosDoUsuario.senha;
    usuarioEntity.nome = dadosDoUsuario.nome;
    usuarioEntity.id = uuid();

    await this.usuarioService.cadastrarUsuario(usuarioEntity);

    return {
      usuario: new DadosParaListagemUsuarioDTO(
        usuarioEntity.id,
        usuarioEntity.nome,
      ),
      message: 'Usuário cadastrado com sucesso!',
    };
  }

  @Get()
  async listarTodos(): Promise<DadosParaListagemUsuarioDTO[]> {
    const listaDeUsuarios = await this.usuarioService.listarUsuarios();
    return listaDeUsuarios;
  }

  @Put('/:id')
  async atualizar(
    @Param('id') id: string,
    @Body() dadosParaAtualizar: DadosParaAtualizacaoUsuarioDTO,
  ) {
    const usuarioAtulizado = await this.usuarioService.atualizarUsuario(
      id,
      dadosParaAtualizar,
    );

    return {
      usuario: usuarioAtulizado,
      message: 'Usuário atualizado com sucesso!',
    };
  }

  @Delete('/:id')
  deletar(@Param('id') id: string) {
    const usuarioRemovido = this.usuarioService.deletarUsuario(id);

    return {
      usuario: usuarioRemovido,
      message: 'Usuário deletado com sucesso!',
    };
  }
}
