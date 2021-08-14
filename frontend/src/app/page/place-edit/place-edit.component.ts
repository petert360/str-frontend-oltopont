import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Place } from 'src/app/model/place';
import { PlaceService } from 'src/app/service/place.service';

@Component({
  selector: 'app-place-edit',
  templateUrl: './place-edit.component.html',
  styleUrls: ['./place-edit.component.scss']
})
export class PlaceEditComponent implements OnInit {

  place: Place = new Place();

  constructor(
    private placeService: PlaceService,
    private router: Router,
    private ar: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.ar.params.subscribe(
      params =>
        this.placeService.get(params.id).subscribe(
          place => {
            this.place = place || new Place();
          }
        )
    );
  }

  onSave(): void {
    this.placeService.update(this.place).subscribe(
      () => this.router.navigate(['/', 'places']),
      err => console.error(err)
    );
  }

}
