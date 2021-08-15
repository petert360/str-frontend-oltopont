import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/model/patient';
import { Vaccine } from 'src/app/model/vaccine';
import { PatientService } from 'src/app/service/patient.service';
import { VaccineService } from 'src/app/service/vaccine.service';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.scss']
})
export class PatientCreateComponent implements OnInit {
  patient: Patient = new Patient();
  vaccineList$: Observable<Vaccine[]> = this.vaccineService.getAll();

  constructor(
    private patientService: PatientService,
    private vaccineService: VaccineService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSave(ngForm: NgForm): void {
    //console.log(ngForm.value.vaccineSelect)
    const {_id, vaccinations, ...data } = this.patient;
    
    data.vaccine = ngForm.value.vaccineSelect
    this.patientService.create(data).subscribe(
      () => this.router.navigate(['/', 'patients']),
      err => console.error(err)
    );
  }


}
