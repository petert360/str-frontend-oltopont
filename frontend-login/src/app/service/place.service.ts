import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Place } from '../model/place';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class PlaceService extends BaseService<Place> {

  constructor(
    public http: HttpClient
  ) {
    super(http);
    this.entity = 'place';
  }
}