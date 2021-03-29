import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators'

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  constructor( private rutaActivacion: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {

    this.rutaActivacion.params
      .pipe(
          switchMap(( param ) => this.paisService.buscarPaisId(param.idPais))
      )
      .subscribe(resp => {
          console.log(resp);
      });
    

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
