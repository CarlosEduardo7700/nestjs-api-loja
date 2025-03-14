import { Injectable } from '@nestjs/common';
import { DadosDoUsuarioDTO } from './dto/DadosDoUsuario.dto';
import { DadosDeCadastroUsuarioDTO } from './dto/DadosDeCadastroUsuario.dto';

@Injectable()
export class UsuarioRepository {
  private usuarios: DadosDoUsuarioDTO[] = [];

  salvar(usuario: DadosDeCadastroUsuarioDTO) {
    this.usuarios.push(usuario);
  }

  listar() {
    return this.usuarios;
  }

  existeComEmail(email: string) {
    const possivelUsuario = this.usuarios.find(
      (usuario) => usuario.email === email,
    );

    return possivelUsuario !== undefined;
  }
}
