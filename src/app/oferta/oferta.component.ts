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

  private oferta: Oferta;

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService, private carrinhoService: CarrinhoService) {}

  ngOnInit() {

    this.route.params.subscribe((parametros: Params) => {
          this.ofertasService.getOfertaPorId(parametros.id)
          .then( (oferta: Oferta) =>{
            this.oferta = oferta;
          });
    }) 

  }

  public adicionarItemCarrinho(oferta: Oferta){

    this.carrinhoService.incluirItem(this.oferta);

  }

  ngOnDestroy(){
    
  }

  

}