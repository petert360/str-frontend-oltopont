import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private readonly apiUrl: string = 'http://localhost:3000/';
  entity: string = '';

  constructor(
    public http: HttpClient,
  ) { }
}
