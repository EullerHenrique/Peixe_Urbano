import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Oferta } from './oferta.model';
import { OfertasService } from './oferta.service';
import { CarrinhoService } from '../ordem-compra/carrinho.service';

import 'rxjs/Rx';

@Component({
  selector: 'peixe-urbano-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})

export class OfertaComponent implements OnInit, OnDestroy {

  public oferta: Oferta;

  constructor(public route: ActivatedRoute, public ofertasService: OfertasService, public carrinhoService: CarrinhoService) {}

  ngOnInit() {

    this.route.params.subscribe((parametros: Params) => {
          this.ofertasService.getOfertaPorId(parametros.id)
          .then( (oferta: Oferta) =>{
            this.oferta = oferta;
          });
    }) 

  }

  public adicionarItemCarrinho(){

    this.carrinhoService.incluirItem(this.oferta);

  }

  ngOnDestroy(){
    
  }

  

}