import { OrdemCompra } from './ordem-compra.model';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { URL_API_PEDIDOS } from '../app.api';

@Injectable()
export class OrdemCompraService{


  constructor(private http: Http){}

  public efetivarCompra(ordemCompra:OrdemCompra): Observable<any>{

    let headers: Headers = new Headers();
    headers.append('Content-type','application/json'); //append = acrescentar

    return this.http.post(
      `${URL_API_PEDIDOS}`,
      JSON.stringify(ordemCompra), // stringify = objeto literal -> string JSON
      new RequestOptions( { 
        headers: headers
      })
    )
    .map((resposta: Response ) => console.log(resposta.json()));

  }

}