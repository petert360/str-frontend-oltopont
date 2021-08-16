import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Patient } from 'src/app/model/patient';
import { ConfigService, ITableCol } from 'src/app/service/config.service';
import { PatientService } from 'src/app/service/patient.service';

interface IPageBtn {
  page: number;
}

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

  phrase: string = "";

  // Paginator változók
  patientAll: Patient[] = [];
  patientNum: number = 0;
  pageSize: number = 5;
  pageStart: number = 1;
  currentPage: number = 1;


  constructor(
    private patientService: PatientService,
    private config: ConfigService,
  ) { }

  ngOnInit(): void {
    // console.log(this.list$)
    this.list$.subscribe(data => {
      this.patientAll = data;
      this.patientNum = data.length;
    })

  }

  // Osztop fejlécére kattintás
  onColumnSelect(key: string): void {
    this.columnKey = key;
    this.sortDir = this.sortDir * (-1);
  }

  // Keresőkifejezés változása
  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
    this.patientNum = this.patientAll.filter(item =>
      item.name.toLowerCase().includes(this.phrase.toLowerCase())).length
    this.currentPage = 1;

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

  // Paginator
  get paginator(): IPageBtn[] {
    const pages: IPageBtn[] = [];
    for (let i = 0; i < this.patientNum / this.pageSize && pages.length < 10; i++) {
      const page = this.pageStart + i;
      pages.push({ page });
    }
    return pages;
  }

  get pageSliceStart(): number {
    const index = this.currentPage - 1;
    return index === 0 ? 0 : (index * this.pageSize);
  }

  get pageSliceEnd(): number {
    return this.pageSliceStart + this.pageSize;
  }

  onPaginate(event: Event, btn: IPageBtn): void {
    event.preventDefault();
    this.currentPage = btn.page;
    this.pageStart = (btn.page - 5) < 1 ? 1 : (btn.page - 5);
  }

  onStepPage(event: Event, step: number): void {
    event.preventDefault();
    this.currentPage += step;
    this.pageStart = (this.currentPage - 5) < 1 ? 1 : (this.currentPage - 5);
  }

}
