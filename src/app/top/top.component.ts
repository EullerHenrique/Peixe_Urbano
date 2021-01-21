import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import '../app.rxjs-extensions'
import { OfertasService } from '../oferta/oferta.service';
import { Oferta } from '../oferta/oferta.model';

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
                       .debounceTime(1000)
                       .distinctUntilChanged()
                       .switchMap((termoDaPesquisa: string) => {
                          console.log('requisicao http para api');

                          if(termoDaPesquisa.trim() === ''){
                            return Observable.of<Oferta[]>([])
                          }
                          
                          return this.OfertasService.pesquisaOfertas(termoDaPesquisa);
                       })
                       .catch((err: any) => {  
                          console.log(err);
                          return Observable.of<Oferta[]>([]);
                       });

  }

  public pesquisa(termoDaPesquisa: string): void{


    // Observer (observador)
    // Subject atuando na condição de observador

    console.log('keyup caracter', termoDaPesquisa);
    this.subjectPesquisa.next(termoDaPesquisa);

  }

  public limpaPesquisa():void{

    this.subjectPesquisa.next('');
    
  }

  

}
