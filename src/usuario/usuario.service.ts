import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from './usuario.entity';
import { Repository } from 'typeorm';
import { DadosParaListagemUsuarioDTO } from './dto/DadosParaListagemUsuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly usuarioRepository: Repository<UsuarioEntity>,
  ) {}

  async listarUsuarios() {
    const usuariosSalvos = await this.usuarioRepository.find();

    const usuarioLista = usuariosSalvos.map(
      (usuario) => new DadosParaListagemUsuarioDTO(usuario.id, usuario.nome),
    );

    return usuarioLista;
  }
}
