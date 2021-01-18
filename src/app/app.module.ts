import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { OfertaComponent } from './oferta/oferta.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';

import { DescricaoReduzida } from './app.pipe';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';
import { OrdemCompraSucessoComponent } from './ordem-compra/ordem-compra-sucesso/ordem-compra-sucesso.component';

@NgModule({
  declarations: 
  [ 
    AppComponent,
    TopComponent,
    HomeComponent,
    FooterComponent,
    RestaurantesComponent,
    DiversaoComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent,
    DescricaoReduzida,
    OrdemCompraComponent,
    OrdemCompraSucessoComponent 
  ],
  imports: 
  [ 
    BrowserModule, 
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES) //forRoot -> As rotas são disponibilizadas globalmente 
  ],
  providers: 
  [
    { provide: LOCALE_ID, useValue: 'pt-Br'} // Ajuste necessário para o pipe DescricaoReduzida funcionar
  ],
  bootstrap:
  [ 
    AppComponent 
  ]
})
export class AppModule { }
