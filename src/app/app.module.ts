import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ArticuloFamiliasComponent } from './componentes/articulo-familias/articulo-familias.component';
import { ArticulosComponent } from './componentes/articulos/articulos.component';
import { MenuComponent } from './componentes/menu/menu.component';

import { RouterModule} from '@angular/router';
import { APP_BASE_HREF} from '@angular/common';

import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ArticuloFamiliasComponent,
    ArticulosComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/inicio', pathMatch: 'full' },
      { path: 'inicio', component: InicioComponent },
      { path: 'articulosfamilias', component: ArticuloFamiliasComponent },
      { path: 'articulos', component: ArticulosComponent }
    ]),
    ReactiveFormsModule
  ],
  providers: [ { provide: APP_BASE_HREF, useValue: "/" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
