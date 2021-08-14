import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vaccination } from 'src/app/model/vaccination';
import { VaccinationService } from 'src/app/service/vaccination.service';

@Component({
  selector: 'app-vaccination-create',
  templateUrl: './vaccination-create.component.html',
  styleUrls: ['./vaccination-create.component.scss']
})
export class VaccinationCreateComponent implements OnInit {
  vaccination: Vaccination = new Vaccination();

  constructor(
    private vaccinationService: VaccinationService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSave(): void {
    this.vaccinationService.create(this.vaccination).subscribe(
      () => this.router.navigate(['/', 'vacciantions']),
      err => console.error(err)
    );
  }


}
