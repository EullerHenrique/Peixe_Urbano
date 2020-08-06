import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HttpModule } from '@angular/http';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DiversaoComponent } from './diversao/diversao.component';

@NgModule({
  declarations: [ 
    AppComponent,
    TopComponent,
    HomeComponent,
    FooterComponent,
    RestaurantesComponent,
    DiversaoComponent 
  ],
  imports: 
       [ 
         BrowserModule, 
         HttpModule 
      ],

  bootstrap:[ 
    AppComponent 
  ]
})
export class AppModule { }
