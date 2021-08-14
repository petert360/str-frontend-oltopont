import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vaccine } from 'src/app/model/vaccine';
import { VaccineService } from 'src/app/service/vaccine.service';

@Component({
  selector: 'app-vaccine-create',
  templateUrl: './vaccine-create.component.html',
  styleUrls: ['./vaccine-create.component.scss']
})
export class VaccineCreateComponent implements OnInit {
  vaccine: Vaccine = new Vaccine();

  constructor(
    private vaccineService: VaccineService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSave(): void {
    this.vaccineService.create(this.vaccine).subscribe(
      () => this.router.navigate(['/', 'vacciness']),
      err => console.error(err)
    );
  }


}
