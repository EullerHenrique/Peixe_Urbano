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

  private myObservable: Observable<Oferta[]>;
  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private OfertasService: OfertasService) { }

  ngOnInit() {


    this.myObservable = this.subjectPesquisa
                       .switchMap((termoDaPesquisa: string) => {
                          console.log('requisicao http para api');
                          return this.OfertasService.pesquisaOfertas(termoDaPesquisa);
                       });

    
    this.myObservable.subscribe((ofertas: Oferta[]) => 
                                console.log(ofertas)
                              );                  


  }

  public pesquisa(termoDaPesquisa: string): void{


    // Observer (observador)
    // Subject atuando na condição de observador

    console.log('keyup caracter', termoDaPesquisa);
    this.subjectPesquisa.next(termoDaPesquisa);



    /*

    //Observable (Observavél)
    this.myObservable = this.OfertasService.pesquisaOfertas(termoDaPesquisa);

    //Observer (Observador)
    let myObserver = {

      next: (ofertas: Oferta[]) => { 
        console.log(ofertas)
      },
      
      error: (erro: any) => {
        console.log('Erro status: ', erro.status);
      }, 

      complete: () => {
        console.log('Valor recebido com sucesso!')
      }
    }

    //Inscreve um observador (myObserver) em um observavél(myObservable)
    //Obs: Toda vez que o observavel adquirir um novo valor, o observador será notificado (o observador receberá o novo valor)

    this.myObservable.subscribe(myObserver)

    */

  }

}
