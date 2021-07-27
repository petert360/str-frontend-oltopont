import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './model/patient';
import { PatientService } from "./service/patient.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  patients: Observable<Patient[]> = this.patientService.getAll();

  constructor(
    private patientService: PatientService,
  ) { }
}
