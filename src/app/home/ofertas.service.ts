import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Oferta } from "../shared/oferta.model";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class OfertasService{

  constructor(private http: Http){}


  public getOfertas(): Promise<void|Oferta[]>{
    return this
    .http.get('http://localhost:3000/ofertas?destaque=true')
    .toPromise()
    .then(
      
      (ofertas: any) => {

        return ofertas.json();
     
      }
    )

  }

  
  /*public getOfertas(): Promise<Oferta[]>{

    //Promise é um objeto usado para processamento assíncrono que retorna em //seu construtor duas funções (resolve e reject) para um callback. Um //Promise (de "promessa") representa um valor que pode estar disponível //agora, no futuro ou nunca.

      return new Promise( 
      
      //O método Promise.resolve(value) retorna (para o método then) um objeto //Promise que foi resolvido com o valor passado.

      //O método Promise.reject(motivo) retorna (para o método then) um objeto //Promise que foi rejeitado com um dado motivo.

          (resolve, reject) =>{  

            let deu_certo = true;
            
            if(deu_certo){

                //Simulação da latência de uma requisição HTTP para uma API REST
                setTimeout( () => { resolve(this.ofertas) }, 3000); 
              
            }else{ 
                reject({
                  codigo_erro: 404,
                  mensagem_erro: "Servidor não encontrado"
                })
            }
          }
        )

        // Como os métodos Promise.prototype.then e Promise.prototype.catch  //retornam promises, eles podem ser encadeados — uma operação chamada //composição.
        .then(
          (ofertas: Oferta[])=>{
              console.log('Primeiro then');
              return ofertas;
          }
        )
        .then(
          (ofertas: Oferta[])=>{
            console.log('Segundo then');
            return new Promise(
              (res, rej)=> {
                  setTimeout(() => {res(ofertas)},3000)
              }
            );
          }
        )
        .then(
          (ofertas: Oferta[])=>{

            console.log('terceiro then executado após 3 segundos porque estava aguardando uma promise ser resolvida');
           return ofertas; 
          }
        )
     
  }
  */
    
}