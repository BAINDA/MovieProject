import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GenericHttpService {
  baseUrl: string = 'https://api.themoviedb.org/3';

  constructor(private httpClient: HttpClient) {}

  httpGet(url: string) {
    return this.httpClient.get(`${this.baseUrl}/${url}`);
  }
}
