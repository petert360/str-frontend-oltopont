import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/model/patient';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.scss']
})
export class PatientCreateComponent implements OnInit {
  patient: Patient = new Patient();

  constructor(
    private patientService: PatientService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSave(): void {
    this.patientService.create(this.patient).subscribe(
      () => this.router.navigate(['/', 'patients']),
      err => console.error(err)
    );
  }

}
