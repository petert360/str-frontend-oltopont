import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/model/patient';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  list$: Observable<Patient[]> = this.patientService.getAll();


  constructor(
    private patientService: PatientService,
  ) { }

  ngOnInit(): void {
  }

}
