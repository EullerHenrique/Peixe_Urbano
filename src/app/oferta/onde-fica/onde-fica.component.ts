import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../../ofertas.service';



@Component({
  selector: "app-onde-fica",
  templateUrl: "./onde-fica.component.html",
  styleUrls: ["./onde-fica.component.css"],
  providers: [ OfertasService ]
})
export class OndeFicaComponent implements OnInit {

  public onde_fica: string = '';

  constructor(private route: ActivatedRoute, private ofertasService: 
  OfertasService) {  }

  ngOnInit() {

    this.ofertasService.getOndeFicaOfertaPorId(this.route.parent.snapshot.params['id'])
    .then( (onde_fica: string) => {
        this.onde_fica = onde_fica;
    })

  }
}
