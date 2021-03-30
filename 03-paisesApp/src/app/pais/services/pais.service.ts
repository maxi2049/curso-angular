import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';
  
  get httpParams() {
    return new HttpParams()
    .set( 'fields', 'name;capital;alpha2Code;population;flag' );
  }

  constructor( private http: HttpClient ) { }



  buscarPais(terminoBus: string): Observable<Pais[]> {
    
    const url = `${ this.apiUrl }/name/${ terminoBus }`;

    return this.http.get<Pais[]>( url, {params: this.httpParams} );
  }


  buscarCapital(capitalBus: string): Observable<Pais[]> {
    
    const url = `${ this.apiUrl }/capital/${ capitalBus }`;

    return this.http.get<Pais[]>( url, { params: this.httpParams } );
  }

  buscarPaisId(idPais: string): Observable<Pais> {
    
    const url = `${ this.apiUrl }/alpha/${ idPais }`;

    return this.http.get<Pais>( url );
  }

  buscarRegion(regionBus: string): Observable<Pais[]> {
    
    const url = `${ this.apiUrl }/region/${ regionBus }`;

    return this.http.get<Pais[]>( url, { params: this.httpParams } );
  }
  
}
