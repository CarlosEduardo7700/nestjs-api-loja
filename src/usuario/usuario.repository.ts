import { Injectable } from '@nestjs/common';
import { UsuarioEntity } from './usuario.entity';

@Injectable()
export class UsuarioRepository {
  private usuarios: UsuarioEntity[] = [];

  salvar(usuario: UsuarioEntity) {
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

  private buscarPorId(id: string) {
    const possivelUsuario = this.usuarios.find(
      (usuarioSalvo) => usuarioSalvo.id === id,
    );

    if (!possivelUsuario) {
      throw new Error('Usuário não encontrado!');
    }

    return possivelUsuario;
  }

  atualizar(id: string, dadosParaAtualizar: Partial<UsuarioEntity>) {
    const usuarioEncontrado = this.buscarPorId(id);

    Object.entries(dadosParaAtualizar).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }

      usuarioEncontrado[chave] = valor;
    });

    return usuarioEncontrado;
  }

  remover(id: string) {
    const usuarioEncontrado = this.buscarPorId(id);

    this.usuarios = this.usuarios.filter((usuario) => usuario.id !== id);

    return usuarioEncontrado;
  }
}
