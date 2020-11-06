import { Component, OnInit } from '@angular/core';
import { ArticuloFamilia } from 'src/app/models/articulo-familia';
import { MockArticulosFamiliasService } from 'src/app/servicios/mock-articulos-familias.service';
import { ArticulosFamiliasService } from "src/app/servicios/articulos-familias.service";

@Component({
  selector: 'app-articulo-familias',
  templateUrl: './articulo-familias.component.html',
  styleUrls: ['./articulo-familias.component.css']
})
export class ArticuloFamiliasComponent implements OnInit {

  articulosFamilias: ArticuloFamilia[];
  titulo: string;

  //constructor(private articuloFamiliasService: MockArticulosFamiliasService) {  
  constructor(private articuloFamiliasService:  ArticulosFamiliasService) {    //Con este cambio puedo usar el servicio posta ya
    this.titulo = "Articulos Familias"
   }

  ngOnInit(): void {
    this.cargarArticulosfamilias();
  }

  cargarArticulosfamilias(){
    this.articuloFamiliasService.get()    // para trabajar con llamadas asyncronas
    .subscribe((res:ArticuloFamilia[]) => {
      this.articulosFamilias = res;
    });
  }

}
