import { Component } from '@angular/core';

import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  capitalBus: string = '';
  hayError: boolean = false;
  capitales: Pais[] = [];

  constructor( private paisService: PaisService) { }

  buscar(termino: string) {
    
    this.hayError = false;
    this.capitalBus = termino;
    
    this.paisService.buscarCapital( this.capitalBus )
      .subscribe( (capitales) => {
        this.capitales = capitales;

      }, (error) => {
        this.hayError = true;
        this.capitales = [];
      });
  }

}
