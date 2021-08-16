import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Patient } from 'src/app/model/patient';
import { ConfigService, ITableCol } from 'src/app/service/config.service';
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

  columnKey: string = "appointment";
  cols: ITableCol[] = this.config.patientColumns;
  sortDir: number = 1;

  constructor(
    private patientService: PatientService,
    private config: ConfigService,
  ) { }

  ngOnInit(): void {
    console.log(this.list$)
  }

  // Osztop fejlécére kattintás
  onColumnSelect(key: string): void {
    this.columnKey = key;
    this.sortDir = this.sortDir * (-1);
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
