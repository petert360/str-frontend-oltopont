import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdverseEvent } from '../model/adverse-event';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AdverseEventService extends BaseService<AdverseEvent> {

  constructor(
    public http: HttpClient
  ) {
    super(http);
    this.entity = 'adverse-event';
  }
}