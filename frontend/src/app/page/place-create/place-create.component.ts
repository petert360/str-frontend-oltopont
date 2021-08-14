import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Place } from 'src/app/model/place';
import { PlaceService } from 'src/app/service/place.service';

@Component({
  selector: 'app-place-create',
  templateUrl: './place-create.component.html',
  styleUrls: ['./place-create.component.scss']
})
export class PlaceCreateComponent implements OnInit {
  place: Place = new Place();

  constructor(
    private placeService: PlaceService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSave(): void {
    this.placeService.create(this.place).subscribe(
      () => this.router.navigate(['/', 'places']),
      err => console.error(err)
    );
  }

}
