import { Pedido } from "./pedido.model";
import { Http, RequestOptions, Headers, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { URL_API_PEDIDOS } from "../app.api";

@Injectable()
export class PedidoService {
  constructor(public http: Http) {}

  public efetivarCompra(pedido: Pedido): Observable<number> {
    let headers: Headers = new Headers();
    headers.append("Content-type", "application/json"); //append = acrescentar

    return this.http
      .post(
        `${URL_API_PEDIDOS}`,
        JSON.stringify(pedido), // stringify = objeto literal -> string JSON
        new RequestOptions({
          headers: headers
        })
      )
      .map((resposta: Response) => {
        console.log(resposta.json());
        return resposta.json().id;
      });
  }
}
