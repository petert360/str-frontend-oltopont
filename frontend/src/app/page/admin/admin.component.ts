import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/model/patient';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  title = 'frontend';

  patients: Observable<Patient[]> = this.patientService.getAll();

  ngOnInit(): void {
  }

  constructor(
    private patientService: PatientService,
  ) { }

}
