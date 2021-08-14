import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdverseEventListComponent } from './adverse-event-list.component';

describe('AdverseEventListComponent', () => {
  let component: AdverseEventListComponent;
  let fixture: ComponentFixture<AdverseEventListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdverseEventListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdverseEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
