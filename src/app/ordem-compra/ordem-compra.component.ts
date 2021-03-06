import { Component, OnInit } from "@angular/core";
import { PedidoService } from "./pedido.service";
import { Pedido } from "./pedido.model";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ItemCarrinho } from "./item-carrinho.model";
import { CarrinhoService } from "./carrinho.service";

@Component({
  selector: "app-ordem-compra",
  templateUrl: "./ordem-compra.component.html",
  styleUrls: ["./ordem-compra.component.css"],
  providers: [PedidoService]
})
export class OrdemCompraComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    endereco: new FormControl(null, [
      Validators.required,
      Validators.minLength(1)
    ]),
    numero: new FormControl(null, [
      Validators.required,
      Validators.nullValidator
    ]),
    complemento: new FormControl(null),
    formaDePagamento: new FormControl(null, [Validators.required])
  });

  constructor(
    public PedidoService: PedidoService,
    public carrinhoService: CarrinhoService
  ) {}

  public idPedido: number;
  public itensCarrinho: ItemCarrinho[] = [];

  ngOnInit() {
    this.itensCarrinho = this.carrinhoService.exibirItens();
  }

  public confirmarCompra(): void {
    let pedido: Pedido = new Pedido(
      this.form.value.endereco,
      this.form.value.numero,
      this.form.value.complemento,
      this.form.value.formaDePagamento,
      this.carrinhoService.exibirItens()
    );

    this.PedidoService.efetivarCompra(pedido).subscribe((idPedido: number) => {
      this.idPedido = idPedido;
      this.carrinhoService.limparCarrinho();
    });
  }
}
