import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from './ordem-compra.service';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  //Valores dos campos

  private endereco: string = '';
  private numero: number = null;
  private complemento: string = '';
  private formaDePagamento: string = '';


  //Controles de validação dos campos

  private enderecoValido: boolean;
  private numeroValido: boolean;
  private complementoValido: boolean;
  private formaDePagamentoValido: boolean;

  //Estados primitivos dos campos (pristine)

  private enderecoEstadoPrimitivo: boolean = true;
  private numeroEstadoPrimitivo: boolean = true;
  private complementoEstadoPrimitivo: boolean =  true;
  private formaDePagamentoEstadoPrimitivo: boolean = true;


  //Controla botão de confirmar compra

  private formEstado: string = 'disabled';

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {

    //this.ordemCompraService.efetivarCompra();
    
  }

  public atualizaEndereco(endereco: string): void{

    this.endereco = endereco;

    this.enderecoEstadoPrimitivo = false;

    if(this.endereco.length > 3){
      this.enderecoValido = true;
    }else{
      this.enderecoValido = false;
    }

    this.habilitaForm();

  }

  public atualizaNumero(numero: number): void{

    this.numero = numero;

    this.numeroEstadoPrimitivo = false;

    if(this.numero > 0 ){
      this.numeroValido =  true;
    }else{
      this.numeroValido = false;
    }

    this.habilitaForm();

  }

  public atualizaComplemento(complemento: string): void{

    this.complemento = complemento;

    this.complementoEstadoPrimitivo = false;

    if(this.complemento.length > 0){
      
      this.complementoValido = true;

    }

    this.habilitaForm();

  
  }
  
  public atualizaFormaDePagamento(formaDePagamento: string): void{

    this.formaDePagamento = formaDePagamento;

    this.formaDePagamentoEstadoPrimitivo = false;

    if(this.formaDePagamento.length > 0){

      this.formaDePagamentoValido = true;      

    }else{

      this.formaDePagamentoValido = false;

    }

    this.habilitaForm();

  }

  public habilitaForm(): void{

    if(this.enderecoValido === true && this.numeroValido === true &&this.formaDePagamentoValido === true){

        this.formEstado = '';

    }else{

      this.formEstado = 'disabled';

    }
    

  }

}