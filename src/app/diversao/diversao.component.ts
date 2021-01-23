import { Component, OnInit } from '@angular/core';
import { Oferta } from '../oferta/oferta.model';
import { OfertasService} from "../oferta/oferta.service";


@Component({
  selector: 'peixe-urbano-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [OfertasService]

})

export class DiversaoComponent implements OnInit {

  public ofertas: Oferta[];

  constructor(public ofertasService: OfertasService){ }

  ngOnInit() {

    this.ofertasService.getOfertasPorCategoria('diversao')
    .then( 
      
      (ofertas: Oferta[]) => {

        this.ofertas = ofertas;        
   
    })

  }

}