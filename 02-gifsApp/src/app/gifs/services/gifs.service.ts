import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, RespuestaBusquedaGIF } from '../interface/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'k038mQpuWge9wh6idbsFL6Cr0VKOwU9j';
  private _historial: string[] = [];

  public resultados: Gif[] = [];


  get historial() {
    return [...this._historial];
  }


  constructor( private http: HttpClient ) {}

  buscarGifs( terminoBusqueda: string ) {

    terminoBusqueda = terminoBusqueda.trim().toLocaleLowerCase();

    if(!this._historial.includes( terminoBusqueda )) {
      this._historial.unshift( terminoBusqueda );
      this._historial = this._historial.splice(0,10);
    }

    this.http.get<RespuestaBusquedaGIF>( `https://api.giphy.com/v1/gifs/search?api_key=k038mQpuWge9wh6idbsFL6Cr0VKOwU9j&q=${ terminoBusqueda} z&limit=10`)
      .subscribe( (resp ) => {
        console.log( resp.data );
        this.resultados = resp.data;
      });

  }

}
