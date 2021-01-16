import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  private endereco: string = '';
  private numero: number = null;
  private complemento: string = '';
  private formaDePagamento: string = '';


  constructor() { }

  ngOnInit() {
  }

  public atualizaEndereco(endereco: string): void{

    this.endereco = endereco;

  }

  public atualizaNumero(numero: number): void{

    this.numero = numero;

  }

  public atualizaComplemento(complemento: string): void{

    this.complemento = complemento;

  }
  
  public atualizaFormaDePagamento(formaDePagamento: string): void{

    this.formaDePagamento = formaDePagamento;

  }

}