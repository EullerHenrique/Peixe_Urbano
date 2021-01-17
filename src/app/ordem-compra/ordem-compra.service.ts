import { OrdemCompra } from './ordem-compra.model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OrdemCompraService{


  constructor(private http: Http){}

  public efetivarCompra(ordemCompra:OrdemCompra):void{

    console.log(ordemCompra);

  }

}