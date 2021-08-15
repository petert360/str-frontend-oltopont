import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Vaccination } from 'src/app/model/vaccination';
import { Vaccine } from 'src/app/model/vaccine';
import { VaccinationService } from 'src/app/service/vaccination.service';
import { VaccineService } from 'src/app/service/vaccine.service';

@Component({
  selector: 'app-vaccination-edit',
  templateUrl: './vaccination-edit.component.html',
  styleUrls: ['./vaccination-edit.component.scss']
})
export class VaccinationEditComponent implements OnInit {

  vaccination: Vaccination = new Vaccination();
  vaccineList$: Observable<Vaccine[]> = this.vaccineService.getAll();

  constructor(
    private vaccinationService: VaccinationService,
    private vaccineService: VaccineService,
    private router: Router,
    private ar: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.ar.params.subscribe(
      params =>
        this.vaccinationService.get(params.id).subscribe(
          vaccination => {
            this.vaccination = vaccination || new Vaccination();
          }
        )
    );
  }

  onSave(form: NgForm): void {
    this.vaccination.vaccine=form.value.vaccineSelect;
    this.vaccinationService.update(this.vaccination).subscribe(
      () => this.router.navigate(['/', 'vaccinations']),
      err => console.error(err)
    );
  }

}
