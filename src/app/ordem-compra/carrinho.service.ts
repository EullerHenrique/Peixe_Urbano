import { ItemCarrinho } from './item-carrinho.model';
import { Oferta } from '../oferta/oferta.model';

export class CarrinhoService{

  public itens: ItemCarrinho[] = [];

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
    //obs: A função find percorre o array itens em busca do item em questão

    let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho)=> item.id === itemCarrinho.id
    )
    if(itemCarrinhoEncontrado){
      itemCarrinhoEncontrado.qtd += 1; 
    }else{
      this.itens.push(itemCarrinho);

    }

  }

  public totalCarrinhoCompras(): number{

   let total: number = 0;

   this.itens.map((item: ItemCarrinho)=> {
    total = total + (item.valor * item.qtd);
   })

   return total;

  }

  public addQtd(itemCarrinho: ItemCarrinho): void {
   
  let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho)=> item.id === itemCarrinho.id);

  if(itemCarrinhoEncontrado){
    itemCarrinhoEncontrado.qtd += 1;
  }
  
}

  public subQtd(itemCarrinho: ItemCarrinho): void {
   
    let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho)=> item.id === itemCarrinho.id);

    if(itemCarrinhoEncontrado){
      itemCarrinhoEncontrado.qtd -= 1;

      if(itemCarrinhoEncontrado.qtd === 0){
      
        this.itens.splice(this.itens.indexOf(itemCarrinhoEncontrado) ,1)
      
      }
    }

}

public getQtd(): number{

  return this.itens.length;

}

public limparCarrinho(): void{

  this.itens = [];

}

}