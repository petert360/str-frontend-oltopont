import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdverseEvent } from 'src/app/model/adverse-event';
import { AdverseEventService } from 'src/app/service/adverse-event.service';

@Component({
  selector: 'app-adverse-event-list',
  templateUrl: './adverse-event-list.component.html',
  styleUrls: ['./adverse-event-list.component.scss']
})
export class AdverseEventListComponent implements OnInit {

  list$: Observable<AdverseEvent[]> = this.adverseEventService.getAll();

  constructor(
    private adverseEventService: AdverseEventService,
  ) { }

  ngOnInit(): void {
  }

  onDelete(ae: AdverseEvent): void {
    if (confirm("A törlés megerősítéséhez nyomja meg az OK gombot")) {
      this.adverseEventService.remove(ae._id as string).subscribe(
        () => this.list$ = this.adverseEventService.getAll()
      )
    } else {
      console.log('Delete operation cancelled')
    }
  }


}
