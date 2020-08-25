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

  private myObservable: Observable<Oferta[]>;

  constructor(private OfertasService: OfertasService) { }

  ngOnInit() {
  }

  public pesquisa(termoDaPesquisa: string): void{

    //Observable (Observavél)
    this.myObservable = this.OfertasService.pesquisaOfertas(termoDaPesquisa);

    //Observer (Observador)
    let myObserver = {

      next: (ofertas: Oferta[]) => { 
        console.log(ofertas)
      },
      error: (erro: any) => {
        console.log('Erro status: ', erro.status);
      }
    }

    //Inscreve um observador (myObserver) em um observavél(myObservable)
    //Obs: Toda vez que um o observador adquirir um novo valor, o observador //será notificado (o observador receberá o novo valor)

    this.myObservable.subscribe(myObserver)

  }

}
