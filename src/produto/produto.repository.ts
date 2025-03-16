import { Injectable } from '@nestjs/common';
import { ProdutoEntity } from './produto.entity';

@Injectable()
export class ProdutoRepository {
  private produtos: ProdutoEntity[] = [];

  salvar(produto: ProdutoEntity) {
    this.produtos.push(produto);
  }

  listar() {
    return this.produtos;
  }

  private buscarPorId(id: string) {
    const possivelProduto = this.produtos.find((produto) => produto.id === id);

    if (!possivelProduto) {
      throw new Error('Produto não encontrado!');
    }

    return possivelProduto;
  }

  atualizar(id: string, dadosParaAtualizar: Partial<ProdutoEntity>) {
    const produtoEncontrado = this.buscarPorId(id);

    Object.entries(dadosParaAtualizar).forEach(([chave, valor]) => {
      if (chave == 'id') {
        return;
      }

      produtoEncontrado[chave] = valor;
    });

    return produtoEncontrado;
  }

  remover(id: string) {
    const produtoEncontrado = this.buscarPorId(id);

    this.produtos = this.produtos.filter((produto) => produto.id !== id);

    return produtoEncontrado;
  }
}
