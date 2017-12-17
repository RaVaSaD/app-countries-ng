import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Import HttpClientModule from @angular/common/http
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { ListadoService} from './listado/listado.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ListadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
