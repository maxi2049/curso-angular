import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators'

import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: Pais;

  constructor( 
    private rutaActivacion: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {

    this.rutaActivacion.params
      .pipe(
          switchMap(( param ) => this.paisService.buscarPaisId(param.idPais)),
          tap(console.log)
      )
      .subscribe(pais => 
          this.pais = pais);
      
    

      //realiza lo mismo que con el pipe
    // this.rutaActivacion.params
    //   .subscribe( params => {
    //     console.log( params.idPais );

    //     this.paisService.buscarPaisId(params.idPais)
    //       .subscribe(pais => {
    //         console.log(pais);
    //       });
    //   });
  }

}
