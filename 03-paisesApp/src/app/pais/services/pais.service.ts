import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  constructor( private http: HttpClient ) { }

  buscarPais(terminoBus: string): Observable<any> {
    
    const url = `${ this.apiUrl }/name/${ terminoBus }`;

    return this.http.get( url );
  }


}
