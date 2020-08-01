import { Component, OnInit } from '@angular/core';
import { OfertasService } from './ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'peixe-urbano-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[];

  constructor(private ofertasService: OfertasService) { 

  }

  ngOnInit() {
    
    //this.ofertas =  this.ofertasService.getOfertas();
    //console.log(this.ofertas);
    
    this
    .ofertasService
    .getOfertas2()
    .then( 
      
      //O método then() retorna uma Promise (para um callback). Possui dois argumentos, ambos são "call back functions", sendo uma para o sucesso e outra para o fracasso da promessa. 

      (ofertas: Oferta[]) => { 

          this.ofertas = ofertas;
     
      },

      (param: any) =>{

        console.log(param);

      })

  }

}
