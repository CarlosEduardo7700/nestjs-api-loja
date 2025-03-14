import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdutoRepository {
  private produtos: object[] = [];

  salvar(produto: object) {
    this.produtos.push(produto);
  }

  listar() {
    return this.produtos;
  }
}
