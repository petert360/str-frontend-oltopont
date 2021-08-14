import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../model/patient';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class PatientService extends BaseService<Patient> {

  constructor(
    public config: ConfigService,
    public http: HttpClient
  ) {
    super(config, http);
    this.entity = 'patient';
  }
}
