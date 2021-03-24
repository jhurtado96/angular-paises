import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CiudadesComponent } from './pages/ciudades/ciudades.component';
import { PercentPipe } from './pipes/percent.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CiudadesComponent,
    PercentPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
