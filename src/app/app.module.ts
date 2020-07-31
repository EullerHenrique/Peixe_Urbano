import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, TopComponent, HomeComponent, FooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
