import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/model/patient';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.scss']
})
export class PatientEditComponent implements OnInit {
  patient: Patient = new Patient();

  constructor(
    private patientService: PatientService,
    private router: Router,
    private ar: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.ar.params.subscribe(
      params =>
        this.patientService.get(params.id).subscribe(
          patient => {
            this.patient = patient || new Patient();
          }
        )
    );
  }

  onSave(): void {
    this.patientService.update(this.patient).subscribe(
      () => this.router.navigate(['/', 'patients']),
      err => console.error(err)
    );
  }

}
