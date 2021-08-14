import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Place } from '../model/place';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class PlaceService extends BaseService<Place> {

  constructor(
    public config: ConfigService,
    public http: HttpClient
  ) {
    super(config, http);
    this.entity = 'place';
  }
}