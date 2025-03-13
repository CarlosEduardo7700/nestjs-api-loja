export class UsuarioRepository {
  private usuarios: object[] = [];

  salvar(usuario: object) {
    this.usuarios.push(usuario);
    console.log(this.usuarios);
  }
}
