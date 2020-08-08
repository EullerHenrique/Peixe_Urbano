import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
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
         HttpModule,
         RouterModule 
      ],

  bootstrap:[ 
    AppComponent 
  ]
})
export class AppModule { }
