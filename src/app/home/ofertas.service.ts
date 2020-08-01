import { Oferta } from "../shared/oferta.model";

export class OfertasService{

  public ofertas: Oferta[] = [
	{
		id: 1,
		categoria: "restaurante",
		titulo: "Burguer King",
	  descricao: "Whopper Furioso",
		valor: 15.90,
		destaque: true,
		imagens: [
			{url: "https://user-images.githubusercontent.com/48317736/88994592-2041ef80-d2bf-11ea-9ba2-27f0e29ae76d.png"},
			{url: "https://user-images.githubusercontent.com/48317736/89074584-f6d2a380-d352-11ea-9ba9-c4daa7a660ec.png"},
			{url: "https://user-images.githubusercontent.com/48317736/89074588-f76b3a00-d352-11ea-8a71-7a398f6917e8.png"},
			{url: "https://user-images.githubusercontent.com/48317736/89074592-f803d080-d352-11ea-9861-74a25ab74b1c.jpg"}
		]
	},
	{
		id: 2,
		categoria: "restaurante",
		titulo: "Subway",
		descricao: "Carne Supreme",
		valor: 11.90,
		destaque: true,
		imagens: [
			{url: "https://user-images.githubusercontent.com/48317736/88994589-1f10c280-d2bf-11ea-9b19-164f3fece38a.jpg"},
			{url: "https://user-images.githubusercontent.com/48317736/89074982-9001ba00-d353-11ea-968b-93128e275f8f.jpg"},
			{url: "https://user-images.githubusercontent.com/48317736/89074984-9132e700-d353-11ea-9660-a985ab8dc101.jpg"},
			{url: "https://user-images.githubusercontent.com/48317736/89074987-92641400-d353-11ea-8b42-04d30fc60bff.jpg"}
		]
	
	},
	{
		id: 3,
		categoria: "restaurante",
		titulo: "Pizza Hut",
		descricao: "Pizza De Calabresa",
    valor: 39.90,
		destaque: true,
		imagens: [
			{url: "https://user-images.githubusercontent.com/48317736/88994586-1ddf9580-d2bf-11ea-8bd0-070d0bb27dac.jpg"},
			{url: "https://user-images.githubusercontent.com/48317736/89075134-e2db7180-d353-11ea-94f2-0684b9ab9550.jpg"},
			{url: "https://user-images.githubusercontent.com/48317736/89075138-e40c9e80-d353-11ea-8844-61b5d992762d.jpg"},
			{url: "https://user-images.githubusercontent.com/48317736/89075141-e4a53500-d353-11ea-8a02-42093a99b2ef.jpeg"}
		]
	}
]

  public getOfertas(): Oferta[]{
     return this.ofertas;
  }

  public getOfertas2(): Promise<Oferta[]>{

    //Promise é um objeto usado para processamento assíncrono. Um Promise (de //"promessa") representa um valor que pode estar disponível agora, no //futuro ou nunca.

        /*Um Promise representa um proxy para um valor que não é necessariamente conhecido quando a promessa é criada. Isso permite a associação de métodos de tratamento para eventos da ação assíncrona num caso eventual de sucesso ou de falha. Isto permite que métodos assíncronos retornem valores como métodos síncronos: ao invés do valor final, o método assíncrono retorna uma promessa ao valor em algum momento no futuro.

        Um Promise está em um destes estados: 

        pending (pendente): Estado inicial, que não foi realizada nem rejeitada.
        fulfilled (realizada): sucesso na operação.
        rejected (rejeitado):  falha na operação.
        settled (estabelecida): Que foi realizada ou rejeitada.
        
        Uma promessa pendente pode se tornar realizada com um valor ou rejeitada por um motivo (erro). Quando um desses estados ocorre, o método then do Promise é chamado, e ele chama o método de tratamento associado ao estado (rejected ou resolved).
        */

      return new Promise( 
      
      //O método Promise.resolve(value) retorna (para o método then) um objeto Promise que é resolvido com o valor passado.

      //O método Promise.reject(motivo) retorna (para o método theb) um objeto Promise que é //rejeitada com um dado motivo.

        (resolve, reject) =>{  

               console.log(resolve);

                resolve(this.ofertas);

        }
   
    );
  }
    
}