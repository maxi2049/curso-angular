import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  constructor( private http: HttpClient ) { }

  buscarPais(terminoBus: string): Observable<Pais[]> {
    
    const url = `${ this.apiUrl }/name/${ terminoBus }`;

    return this.http.get<Pais[]>( url );
  }


}
