import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vaccination } from '../model/vaccination';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class VaccinationService extends BaseService<Vaccination> {

  constructor(
    public config: ConfigService,
    public http: HttpClient
  ) {
    super(config, http);
    this.entity = 'vaccination';
  }
}
