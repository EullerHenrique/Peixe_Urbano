import { Component, OnInit } from "@angular/core";
import { OrdemCompraService } from "./ordem-compra.service";
import { OrdemCompra } from "./ordem-compra.model";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-ordem-compra",
  templateUrl: "./ordem-compra.component.html",
  styleUrls: ["./ordem-compra.component.css"],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {
  
  private form: FormGroup = new FormGroup({
    'endereco': new FormControl(null),
    'numero': new FormControl(null),
    'complemento': new FormControl(null),
    'formaDePagamento': new FormControl(null),
  });

  constructor(private ordemCompraService: OrdemCompraService) {}

  ngOnInit() {}

  public confirmarCompra():void{
    console.log(this.form);
  }


}
