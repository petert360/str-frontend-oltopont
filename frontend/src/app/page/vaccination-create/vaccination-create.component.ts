import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Place } from 'src/app/model/place';
import { Vaccination } from 'src/app/model/vaccination';
import { Vaccine } from 'src/app/model/vaccine';
import { PlaceService } from 'src/app/service/place.service';
import { VaccinationService } from 'src/app/service/vaccination.service';
import { VaccineService } from 'src/app/service/vaccine.service';

@Component({
  selector: 'app-vaccination-create',
  templateUrl: './vaccination-create.component.html',
  styleUrls: ['./vaccination-create.component.scss']
})
export class VaccinationCreateComponent implements OnInit {
  vaccination: Vaccination = new Vaccination();
  vaccineList$: Observable<Vaccine[]> = this.vaccineService.getAll();
  placeList$: Observable<Place[]> = this.placeService.getAll();

  constructor(
    private vaccinationService: VaccinationService,
    private vaccineService: VaccineService,
    private placeService: PlaceService,
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
