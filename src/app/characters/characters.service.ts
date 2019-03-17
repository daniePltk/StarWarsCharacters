import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class CharactersService {
  constructor(private http: HttpClient) {
  }

  getCharacters(pageNumber: number): Observable<any> {
    return this.http.get('https://swapi.co/api/people/?page=' + pageNumber);
  }
}
