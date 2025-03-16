export class ProdutoEntity {
  id: string;
  nome: string;
  valor: number;
  quantidadeDisponivel: number;
  descricao: string;
  caracteristicas: CaracteristicaDoProdutoEntity[];
  imagens: ImagemDoProdutoEntity[];
  categoria: string;
}

class CaracteristicaDoProdutoEntity {
  nome: string;
  descricao: string;
}

class ImagemDoProdutoEntity {
  url: string;
  descricao: string;
}
