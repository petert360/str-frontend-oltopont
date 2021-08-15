import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Vaccination } from 'src/app/model/vaccination';
import { VaccinationService } from 'src/app/service/vaccination.service';

@Component({
  selector: 'app-vaccination-list',
  templateUrl: './vaccination-list.component.html',
  styleUrls: ['./vaccination-list.component.scss']
})
export class VaccinationListComponent implements OnInit {

  list$: Observable<Vaccination[]> = this.vaccinationService.getAll().pipe(
    tap( res => console.log(res)));

  constructor(
    private vaccinationService: VaccinationService,

  ) { }

  ngOnInit(): void {
  }

}
