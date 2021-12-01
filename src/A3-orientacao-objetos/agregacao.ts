export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  private name: string;
  public preco: number;

  constructor(name: string, preco: number) {
    this.name = name;
    this.preco = preco;
  }

  get getName(): string {
    return this.name;
  }
}

const p1 = new Produto('garrafa', 120);
const p2 = new Produto('camiseta', 20);
const p3 = new Produto('agua', 1);

const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.inserirProdutos(p1, p2, p3);
