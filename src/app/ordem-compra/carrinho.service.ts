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

    //Verifica se o item em questão já existe dentro de this.itens
    //obs: A função find percorre o array itens 

    let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho)=> item.id === itemCarrinho.id
    )
    if(itemCarrinhoEncontrado){
      itemCarrinhoEncontrado.qtd += 1; 
    }else{
      this.itens.push(itemCarrinho);

    }

  }

}