import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionMedicationTimelineItemComponent } from './interaction-medication-timeline-item.component';

describe('InteractionMedicationTimelineItemComponent', () => {
  let component: InteractionMedicationTimelineItemComponent;
  let fixture: ComponentFixture<InteractionMedicationTimelineItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractionMedicationTimelineItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionMedicationTimelineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
