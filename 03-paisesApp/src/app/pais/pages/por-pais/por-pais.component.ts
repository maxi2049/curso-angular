import { Component } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {


  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];
  paisesSugeridos: Pais[] = [];
  mostrarSugerencias: boolean = false;

  constructor( private paisService: PaisService) { }

  buscar(termino: string) {
    
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino;
    
    this.paisService.buscarPais( termino )
      .subscribe( (paises) => {
        console.log(paises);
        this.paises = paises;

      }, (error) => {
        this.hayError = true;
        this.paises = [];
      });
  }

  sugerencias( termino: string ){
    this.termino = termino;
    this.hayError = false;
    this.mostrarSugerencias = true;
    
    this.paisService.buscarPais(termino)
      .subscribe( 
        paises => this.paisesSugeridos = paises.splice(0,5),
        (error) => this.paisesSugeridos = [] )

  }

  buscarSugerido(termino: string) {
    this.buscar( termino );
  }

}
