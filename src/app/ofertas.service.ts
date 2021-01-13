import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Oferta } from "ofertas.model";
import { URL_API_OFERTAS, URL_API_COMO_USAR, URL_API_ONDE_FICA } from "./app.api";

import 'rxjs/add/operator/toPromise';
import { HttpBackend } from "@angular/common/http";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';


@Injectable()
export class OfertasService{

  constructor(private http: Http){}


  public getOfertas(): Promise<Oferta[]>{
    return this
    .http.get(`${URL_API_OFERTAS}?destaque=true`)
    .toPromise()
    .then(
      
      (ofertas: Response) => {

        return ofertas.json();
     
      }
    )

  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]>{
      return this
      .http.get(`${URL_API_OFERTAS}?categoria=${categoria}`)
      .toPromise()
      .then(
      
      (ofertas: Response) => {

        return ofertas.json();
     
      }
    );
  }

  public getOfertaPorId(id: number): Promise<Oferta>{
      return this
      .http.get(`${URL_API_OFERTAS}?id=${id}`)
      .toPromise()
      .then(
      
      (oferta: Response) => {

        return oferta.json().shift(); //shift() = extrai o conteúdo presente na primeira posição do array
     
      }
    );
  }

  public getComoUsarOfertaPorId(id: number): Promise<string>{
      return this
      .http.get(`${URL_API_COMO_USAR}?id=${id}`)
      .toPromise()
      .then( (como_usar: Response) => {
        return como_usar.json()[0].descricao;
      })
  }

  public getOndeFicaOfertaPorId(id: number): Promise<string>{
      return this
      .http.get(`${URL_API_ONDE_FICA}?id=${id}`)
      .toPromise()
      .then( (como_usar: Response) => {
        return como_usar.json()[0].descricao;
      })
  }

  public pesquisaOfertas(termoDaPesquisa: string): Observable<Oferta[]>{
      return this.http.get(`${URL_API_OFERTAS}?descricao_like=${termoDaPesquisa}`)
      .retry(10)
      .map( (ofertas: Response) => {
        return ofertas.json();
      })
  
  }



}