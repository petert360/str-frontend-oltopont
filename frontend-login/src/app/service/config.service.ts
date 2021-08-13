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
    { key: 'olt_idopont', text: 'Idő' },
    { key: 'pt_nev', text: 'Név' },
    { key: 'pt_taj', text: 'TAJ' },
    { key: 'vaccine', text: 'Vakcina' },
    { key: 'megjelent', text: 'Kész', checkbox: true },
  ]


  constructor() { }
}
