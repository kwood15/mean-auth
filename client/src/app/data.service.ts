import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {

  }

  getProduct(id) {
    return this.http.get(`${this.baseUrl}/photos/${id}`);
  }

  getProducts() {
    return this.http.get(`${this.baseUrl}/photos?_page=1&_limit=16`);
  }
}
