import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionReportTimelineItemComponent } from './interaction-report-timeline-item.component';

describe('InteractionReportTimelineItemComponent', () => {
  let component: InteractionReportTimelineItemComponent;
  let fixture: ComponentFixture<InteractionReportTimelineItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractionReportTimelineItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionReportTimelineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
