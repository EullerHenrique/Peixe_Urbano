import { Component, OnInit } from "@angular/core";
import { OrdemCompraService } from "./ordem-compra.service";
import { OrdemCompra } from "./ordem-compra.model";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-ordem-compra",
  templateUrl: "./ordem-compra.component.html",
  styleUrls: ["./ordem-compra.component.css"],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {
  
  private form: FormGroup = new FormGroup({
    'endereco': new FormControl(null, [ Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    'numero': new FormControl(null, [ Validators.required, Validators.nullValidator]),
    'complemento': new FormControl(null),
    'formaDePagamento': new FormControl(null, [ Validators.required ]),
  });

  constructor(private ordemCompraService: OrdemCompraService) {}

  ngOnInit() {}

  public confirmarCompra():void{
    console.log(this.form);
  }


}
