import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vaccine } from 'src/app/model/vaccine';
import { VaccineService } from 'src/app/service/vaccine.service';

@Component({
  selector: 'app-vaccine-edit',
  templateUrl: './vaccine-edit.component.html',
  styleUrls: ['./vaccine-edit.component.scss']
})
export class VaccineEditComponent implements OnInit {

  vaccine: Vaccine = new Vaccine();

  constructor(
    private vaccineService: VaccineService,
    private router: Router,
    private ar: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.ar.params.subscribe(
      params =>
        this.vaccineService.get(params.id).subscribe(
          vaccine => {
            this.vaccine = vaccine || new Vaccine();
          }
        )
    );
  }

  onSave(): void {
    this.vaccineService.update(this.vaccine).subscribe(
      () => this.router.navigate(['/', 'vaccines']),
      err => console.error(err)
    );
  }

}
