import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdverseEvent } from '../model/adverse-event';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class AdverseEventService extends BaseService<AdverseEvent> {

  constructor(
    public config: ConfigService,
    public http: HttpClient
  ) {
    super(config, http);
    this.entity = 'adverse-event';
  }
}