import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'peixe-urbano-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public pesquisa(termoDaPesquisa: string): void{
    console.log(termoDaPesquisa);
  }

}
