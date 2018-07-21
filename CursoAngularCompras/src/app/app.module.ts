import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// importamos el servicio
import { ProveedoresService } from './servicios/proveedores.service';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';


@NgModule({

  declarations: [
    AppComponent,
    ProveedoresComponent

  ],

  imports: [
    BrowserModule
  ],

  // se mete  el servicio dentro del array
  providers: [ProveedoresService],

  bootstrap: [AppComponent]

})

export class AppModule { }
