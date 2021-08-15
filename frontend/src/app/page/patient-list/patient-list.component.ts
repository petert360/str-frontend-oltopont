import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Patient } from 'src/app/model/patient';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  list$: Observable<Patient[]> = this.patientService.getAll().pipe(
    tap( res => console.log(res)))

  constructor(
    private patientService: PatientService,
  ) { }

  ngOnInit(): void {
    console.log(this.list$)
  }

}
