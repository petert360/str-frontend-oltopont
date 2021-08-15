import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/model/patient';
import { Vaccine } from 'src/app/model/vaccine';
import { PatientService } from 'src/app/service/patient.service';
import { VaccineService } from 'src/app/service/vaccine.service';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.scss']
})
export class PatientEditComponent implements OnInit {
  patient: Patient = new Patient();
  vaccineList$: Observable<Vaccine[]> = this.vaccineService.getAll();

  constructor(
    private patientService: PatientService,
    private vaccineService: VaccineService,
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

  onSave(form: NgForm): void {
    this.patient.vaccine=form.value.vaccineSelect;
    this.patientService.update(this.patient).subscribe(
      () => this.router.navigate(['/', 'patients']),
      err => console.error(err)
    );
  }

}
