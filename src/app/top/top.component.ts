import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';
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
  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private OfertasService: OfertasService) { }

  ngOnInit() {


    this.ofertas = this.subjectPesquisa
                       .switchMap((termoDaPesquisa: string) => {
                          console.log('requisicao http para api');
                          return this.OfertasService.pesquisaOfertas(termoDaPesquisa);
                       });

    // Observeble (Observável)
    // Subjcect atuando na condiçãode observável

    //Obs: Toda vez que o observavel adquirir um novo valor, uma função de callback receberá o novo valor

    this.ofertas.subscribe((ofertas: Oferta[]) => 
                                console.log(ofertas)
                              );                  


  }

  public pesquisa(termoDaPesquisa: string): void{


    // Observer (observador)
    // Subject atuando na condição de observador

    console.log('keyup caracter', termoDaPesquisa);
    this.subjectPesquisa.next(termoDaPesquisa);

  }

}
