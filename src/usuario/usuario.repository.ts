import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuarioRepository {
  private usuarios: object[] = [];

  salvar(usuario: object) {
    this.usuarios.push(usuario);
  }

  listar() {
    return this.usuarios;
  }
}
