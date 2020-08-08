import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Oferta } from "./shared/oferta.model";

import 'rxjs/add/operator/toPromise';
import { HttpBackend } from "@angular/common/http";

@Injectable()
export class OfertasService{

  constructor(private http: Http){}


  public getOfertas(): Promise<Oferta[]>{
    return this
    .http.get('http://localhost:3000/ofertas?destaque=true')
    .toPromise()
    .then(
      
      (ofertas: any) => {

        return ofertas.json();
     
      }
    )

  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]>{
      return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`)
      .toPromise()
      .then(
      
      (ofertas: any) => {

        return ofertas.json();
     
      }
    );
  }

    
}