import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vaccination } from 'src/app/model/vaccination';
import { VaccinationService } from 'src/app/service/vaccination.service';

@Component({
  selector: 'app-vaccination-edit',
  templateUrl: './vaccination-edit.component.html',
  styleUrls: ['./vaccination-edit.component.scss']
})
export class VaccinationEditComponent implements OnInit {

  vaccination: Vaccination = new Vaccination();

  constructor(
    private vaccinationService: VaccinationService,
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

  onSave(): void {
    this.vaccinationService.update(this.vaccination).subscribe(
      () => this.router.navigate(['/', 'vaccinations']),
      err => console.error(err)
    );
  }

}
