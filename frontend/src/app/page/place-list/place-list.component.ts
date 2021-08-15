import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Place } from 'src/app/model/place';
import { PlaceService } from 'src/app/service/place.service';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss']
})
export class PlaceListComponent implements OnInit {

  list$: Observable<Place[]> = this.placeService.getAll();

  constructor(
    private placeService: PlaceService,
  ) { }

  ngOnInit(): void {
  }

  onDelete(place: Place): void {
    if (confirm("A törlés megerősítéséhez nyomja meg az OK gombot")) {
      this.placeService.remove(place._id as string).subscribe(
        () => this.list$ = this.placeService.getAll()
      )
    } else {
      console.log('Delete operation cancelled')
    }
  }


}
