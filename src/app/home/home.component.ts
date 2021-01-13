import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../ofertas.model';

@Component({
  selector: 'peixe-urbano-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[];

  constructor(private ofertasService: OfertasService) {}

  ngOnInit() {
    
    this
    .ofertasService
    .getOfertas()

     /*
     
     O método then() retorna uma Promise (para um callback). Possui dois    argumentos, ambos são "call back functions", sendo uma para o sucesso e outra para o fracasso da promessa. 
     
     */

    .then( 

      (ofertas: Oferta[]) => { 
        
          this.ofertas = ofertas;
     
      }

      /*
      
      (param: any) =>{

        console.log(param);

      }

      */
      
      )

      /*

      O método catch() retorna uma Promise e lida apenas com casos rejeitados. Ele possui o mesmo comportamento de quando chamamos Promise.prototype.then(undefined, onRejected) (de fato, chamando obj.catch(onRejected) internamente é chamado obj.then(undefined, onRejected)).

      */

     .catch(

      (param: any) =>{

        console.log(param);

      }

     )

  }

}
