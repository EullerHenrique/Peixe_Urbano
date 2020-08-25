import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'peixe-urbano-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
  providers: [ OfertasService ]
})
export class TopComponent implements OnInit {

  private ofertas: Observable<Oferta[]>;

  constructor(private OfertasService: OfertasService) { }

  ngOnInit() {
  }

  public pesquisa(termoDaPesquisa: string): void{
    this.ofertas = this.OfertasService.pesquisaOfertas(termoDaPesquisa);
   
    this.ofertas.subscribe( 
      (ofertas: Oferta[]) => console.log(ofertas)
    )
  }

}
