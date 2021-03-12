import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, RespuestaBusquedaGIF } from '../interface/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'k038mQpuWge9wh6idbsFL6Cr0VKOwU9j';
  private url: string = 'https://api.giphy.com/v1/gifs'
  private _historial: string[] = [];

  public resultados: Gif[] = [];


  get historial() {
    return [...this._historial];
  }

  
  constructor( private http: HttpClient ) {

    this._historial = JSON.parse( localStorage.getItem( 'historial' )! ) || [];
    this.resultados = JSON.parse( localStorage.getItem( 'resultados' )! ) || [];
    // if( localStorage.getItem( 'historial' ) ) {
    //   this._historial = JSON.parse( localStorage.getItem( 'historial' )! );
    // }

  }

  buscarGifs( terminoBusqueda: string ) {

    terminoBusqueda = terminoBusqueda.trim().toLocaleLowerCase();

    if(!this._historial.includes( terminoBusqueda )) {
      this._historial.unshift( terminoBusqueda );
      this._historial = this._historial.splice(0,10);

      localStorage.setItem( 'historial', JSON.stringify( this._historial ) )
    }

    const params = new HttpParams()
            .set('api_key', this.apiKey)
            .set('limit', '10')
            .set('q', terminoBusqueda);

    this.http.get<RespuestaBusquedaGIF>( `${ this.url }/search`, { params })
      .subscribe( (resp ) => {
        console.log( resp.data );
        this.resultados = resp.data;
      
        localStorage.setItem( 'resultados', JSON.stringify( this.resultados ) )
      }
      );

  }

}
