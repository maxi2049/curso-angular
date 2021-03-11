import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];

  get historial() {
    return [...this._historial];
  }

  buscarGifs( terminoBusqueda: string ) {

    terminoBusqueda = terminoBusqueda.trim().toLocaleLowerCase();

    if(!this._historial.includes( terminoBusqueda )) {
      this._historial.unshift( terminoBusqueda );
    }

    this._historial = this._historial.splice(0,10);

    console.log( this._historial );

  }

}
