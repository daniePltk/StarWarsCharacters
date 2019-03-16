import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class CharactersService {



  constructor(private http: HttpClient) {
  }

  getCharacters(pageNumber?: number): Observable<any> {
    let params;
    let url;
    if (pageNumber) {
      params = pageNumber;
      params.toString();
      url = 'https://swapi.co/api/people/?page=' + params;
    } else {
      url = 'https://swapi.co/api/people/';
    }
    return this.http.get(url);
  }
}
