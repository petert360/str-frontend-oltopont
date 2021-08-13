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
export class ConfigService {-

  apiUrl = 'http://localhost:3000/';

  patientColumns: ITableCol[] = [
    { key: 'appointment', text: 'Időpont' },
    { key: 'name', text: 'Név' },
    { key: 'persinalId', text: 'Azonosító' },
    { key: 'vaccine', text: 'Vakcina' },
    { key: 'done', text: 'Kész', checkbox: false },
  ]


  constructor() { }
}
