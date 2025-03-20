import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';
import { DadosDeCadastroProdutoDTO } from './dto/DadosDeCadastroProduto.dto';
import { ProdutoEntity } from './produto.entity';
import { v4 } from 'uuid';
import { DadosParaAtualizacaoProdutoDTO } from './dto/DadosParaAtualizacaoProduto.dto';

@Controller('/produtos')
export class ProdutoController {
  constructor(private produtoRepository: ProdutoRepository) {}

  @Post()
  cadastrar(@Body() dadosDoProduto: DadosDeCadastroProdutoDTO): object {
    const produtoEntity = new ProdutoEntity();

    produtoEntity.nome = dadosDoProduto.nome;
    produtoEntity.valor = dadosDoProduto.valor;
    produtoEntity.quantidadeDisponivel = dadosDoProduto.quantidadeDisponivel;
    produtoEntity.descricao = dadosDoProduto.descricao;
    // produtoEntity.caracteristicas = dadosDoProduto.caracteristicas;
    // produtoEntity.imagens = dadosDoProduto.imagens;
    produtoEntity.categoria = dadosDoProduto.categoria;
    produtoEntity.id = v4();

    this.produtoRepository.salvar(produtoEntity);

    return {
      produto: produtoEntity,
      message: 'Produto cadastrado com sucesso!',
    };
  }

  @Get()
  listarTodos(): object[] {
    return this.produtoRepository.listar();
  }

  @Put('/:id')
  atualizar(
    @Param('id') id: string,
    @Body() dadosParaAtualizar: DadosParaAtualizacaoProdutoDTO,
  ) {
    const produtoAtualizado = this.produtoRepository.atualizar(
      id,
      dadosParaAtualizar,
    );

    return {
      produto: produtoAtualizado,
      message: 'Produto atualizado com sucesso!',
    };
  }

  deletar(@Param('id') id: string) {
    const produtoRemovido = this.produtoRepository.remover(id);

    return {
      produto: produtoRemovido,
      message: 'Produto deletado com sucesso!',
    };
  }
}
