import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from './usuario.entity';
import { Repository } from 'typeorm';
import { DadosParaListagemUsuarioDTO } from './dto/DadosParaListagemUsuario.dto';
import { DadosParaAtualizacaoUsuarioDTO } from './dto/DadosParaAtualizacaoUsuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly usuarioRepository: Repository<UsuarioEntity>,
  ) {}

  async cadastrarUsuario(usuario: UsuarioEntity) {
    await this.usuarioRepository.save(usuario);
  }

  async listarUsuarios() {
    const usuariosSalvos = await this.usuarioRepository.find();

    const usuarioLista = usuariosSalvos.map(
      (usuario) => new DadosParaListagemUsuarioDTO(usuario.id, usuario.nome),
    );

    return usuarioLista;
  }

  async atualizarUsuario(id: string, usuario: DadosParaAtualizacaoUsuarioDTO) {
    await this.usuarioRepository.update(id, usuario);
  }

  async deletarUsuario(id: string) {
    await this.usuarioRepository.delete(id);
  }
}
