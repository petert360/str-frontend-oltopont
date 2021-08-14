import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vaccine } from '../model/vaccine';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class VaccineService extends BaseService<Vaccine> {

  constructor(
    public config: ConfigService,
    public http: HttpClient
  ) {
    super(config, http);
    this.entity = 'vaccine';
  }
}
