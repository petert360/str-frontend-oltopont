import { Injectable } from '@angular/core';

export interface ITableCol {
  key: string,
  text: string,
  editable?: boolean,
  checkbox?: boolean,
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  apiUrl = 'http://localhost:3000/';

  patientColumns: ITableCol[] = [
    { key: 'appointment', text: 'Idő' },
    { key: 'name', text: 'Név' },
    { key: 'personalId', text: 'TAJ' },
    { key: 'vaccine', text: 'Vakcina' },
  ]


  constructor() { }
}
