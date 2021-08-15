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

  patient: Patient = new Patient();
  list$: Observable<Patient[]> = this.patientService.getAll().pipe(
    tap(res => console.log(res)))

  constructor(
    private patientService: PatientService,
  ) { }

  ngOnInit(): void {
    console.log(this.list$)
  }

  onDelete(patient: Patient): void {
    if (confirm("A törlés megerősítéséhez nyomja meg az OK gombot")) {
      this.patientService.remove(patient._id as string).subscribe(
        () => this.list$ = this.patientService.getAll()
      )
    } else {
      console.log('Delete operation cancelled')
    }
  }

}
