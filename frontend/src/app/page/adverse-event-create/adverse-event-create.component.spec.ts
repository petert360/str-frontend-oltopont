import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdverseEventCreateComponent } from './adverse-event-create.component';

describe('AdverseEventCreateComponent', () => {
  let component: AdverseEventCreateComponent;
  let fixture: ComponentFixture<AdverseEventCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdverseEventCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdverseEventCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
