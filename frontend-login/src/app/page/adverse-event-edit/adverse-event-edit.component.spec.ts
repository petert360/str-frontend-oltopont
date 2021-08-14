import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdverseEventEditComponent } from './adverse-event-edit.component';

describe('AdverseEventEditComponent', () => {
  let component: AdverseEventEditComponent;
  let fixture: ComponentFixture<AdverseEventEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdverseEventEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdverseEventEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
