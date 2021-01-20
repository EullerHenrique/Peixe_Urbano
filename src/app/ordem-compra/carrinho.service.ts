import { ItemCarrinho } from './item-carrinho.model';
import { Oferta } from '../oferta/oferta.model';

export class CarrinhoService{

  private itens: ItemCarrinho[] = [];

  public exibirItens(): ItemCarrinho[]{
    
    return this.itens;

  }

  public incluirItem(oferta: Oferta): void{

    let itemCarrinho = new ItemCarrinho(
        oferta.id,
        oferta.imagens[0],
        oferta.empresa,
        oferta.produto,
        oferta.valor,
        1    
    )

    this.itens.push(itemCarrinho);

  }

}