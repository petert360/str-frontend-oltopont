import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vaccine } from 'src/app/model/vaccine';
import { VaccineService } from 'src/app/service/vaccine.service';

@Component({
  selector: 'app-vaccine-list',
  templateUrl: './vaccine-list.component.html',
  styleUrls: ['./vaccine-list.component.scss']
})
export class VaccineListComponent implements OnInit {
  
  list$: Observable<Vaccine[]> = this.vaccineService.getAll();


  constructor(
    private vaccineService: VaccineService,
  ) { }

  ngOnInit(): void {
  }

  onDelete(vaccine: Vaccine): void {
    if (confirm("A törlés megerősítéséhez nyomja meg az OK gombot")) {
      this.vaccineService.remove(vaccine._id as string).subscribe(
        () => this.list$ = this.vaccineService.getAll()
      )
    } else {
      console.log('Delete operation cancelled')
    }
  }


}
