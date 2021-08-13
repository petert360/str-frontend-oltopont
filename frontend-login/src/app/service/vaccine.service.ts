import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vaccine } from '../model/vaccine';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class VaccineService extends BaseService<Vaccine> {

  constructor(
    public http: HttpClient
  ) {
    super(http);
    this.entity = 'vaccine';
  }
}
