import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'peixe-urbano-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
  providers: [ OfertasService ]
})
export class TopComponent implements OnInit {

  constructor(private OfertasService: OfertasService) { }

  ngOnInit() {
  }

  public pesquisa(termoDaPesquisa: string): void{
    console.log(termoDaPesquisa);
  }

}
