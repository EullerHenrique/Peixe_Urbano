import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../oferta.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [ OfertasService ]
})
export class ComoUsarComponent implements OnInit {

  public como_usar: string = `.`;

  constructor(public route: ActivatedRoute, public ofertasService: OfertasService) {  }

  ngOnInit() {

    this.route.parent.params.subscribe((parametros: Params) => {

      this.ofertasService.getComoUsarOfertaPorId(parametros.id)
      .then( (como_usar: string) => {
          this.como_usar = como_usar;
      });

    })

  }

}