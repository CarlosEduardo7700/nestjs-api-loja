import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';

@Controller('/produtos')
export class ProdutoController {
  constructor(private produtoRepository: ProdutoRepository) {}

  @Post()
  cadastrar(@Body() dadosDoProduto: object): object {
    this.produtoRepository.salvar(dadosDoProduto);
    return dadosDoProduto;
  }

  @Get()
  listarTodos(): object[] {
    return this.produtoRepository.listar();
  }
}
