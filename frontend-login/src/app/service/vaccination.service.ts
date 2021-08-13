import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vaccination } from '../model/vaccination';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class VaccinationService extends BaseService<Vaccination> {

  constructor(
    public http: HttpClient
  ) {
    super(http);
    this.entity = 'vaccination';
  }
}
