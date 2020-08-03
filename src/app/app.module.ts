import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HttpModule} from '@angular/http';

@NgModule({
  declarations: [ 
    AppComponent,
    TopComponent,
    HomeComponent,
    FooterComponent 
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
