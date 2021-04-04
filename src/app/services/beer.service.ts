import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  // API URL
  private apiURL = 'https://api.punkapi.com/v2/beers';

  // HTTP headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  // Get all beers
  getAllBeers(): Observable<any> {
    return this.httpClient.get(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  // Get specific beer with provided id
  getBeer(id: string): Observable<any> {
    const API_URL = `${this.apiURL}/${id}`;
    return this.httpClient.get(API_URL, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  // tslint:disable-next-line: typedef
  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
