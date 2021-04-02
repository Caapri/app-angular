import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  // API URL
  apiURL = 'https://api.punkapi.com/v2/beers';

  constructor(private httpClient: HttpClient) { }

  getBeers(): Observable<any> {
    return this.httpClient.get<any>(this.apiURL);
  }
}
