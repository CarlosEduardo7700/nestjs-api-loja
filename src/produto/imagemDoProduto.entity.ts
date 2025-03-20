import { Column, Entity } from 'typeorm';

@Entity({ name: 'produto_imagens' })
export class ImagemDoProdutoEntity {
  @Column({ name: 'url', length: 100, nullable: false })
  url: string;

  @Column({ name: 'descricao', length: 255, nullable: false })
  descricao: string;
}
