import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdverseEvent } from 'src/app/model/adverse-event';
import { AdverseEventService } from 'src/app/service/adverse-event.service';

@Component({
  selector: 'app-adverse-event-edit',
  templateUrl: './adverse-event-edit.component.html',
  styleUrls: ['./adverse-event-edit.component.scss']
})
export class AdverseEventEditComponent implements OnInit {

  ae: AdverseEvent = new AdverseEvent();

  constructor(
    private aeService: AdverseEventService,
    private router: Router,
    private ar: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.ar.params.subscribe(
      params =>
        this.aeService.get(params.id).subscribe(
          ae => {
            this.ae = ae || new AdverseEvent();
          }
        )
    );
  }

  onSave(): void {
    this.aeService.update(this.ae).subscribe(
      () => this.router.navigate(['/', 'adverse-events']),
      err => console.error(err)
    );
  }

}
