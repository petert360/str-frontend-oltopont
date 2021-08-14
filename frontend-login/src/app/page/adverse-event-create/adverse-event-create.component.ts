import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdverseEvent } from 'src/app/model/adverse-event';
import { AdverseEventService } from 'src/app/service/adverse-event.service';

@Component({
  selector: 'app-adverse-event-create',
  templateUrl: './adverse-event-create.component.html',
  styleUrls: ['./adverse-event-create.component.scss']
})
export class AdverseEventCreateComponent implements OnInit {
  ae: AdverseEvent = new AdverseEvent();

  constructor(
    private aeService: AdverseEventService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSave(): void {
    this.aeService.create(this.ae).subscribe(
      () => this.router.navigate(['/', 'adverse-events']),
      err => console.error(err)
    );
  }


}
