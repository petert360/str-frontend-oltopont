import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  onSave(ngForm: NgForm): void {
    const {_id, ...data } = this.vaccine;
    this.vaccineService.create(data).subscribe(
      () => this.router.navigate(['/', 'vaccines']),
      err => console.error(err)
    );
  }


}
