import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionParametersMeasureTimelineItemComponent } from './interaction-parameters-measure-timeline-item.component';

describe('InteractionParametersMeasureTimelineItemComponent', () => {
  let component: InteractionParametersMeasureTimelineItemComponent;
  let fixture: ComponentFixture<InteractionParametersMeasureTimelineItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractionParametersMeasureTimelineItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionParametersMeasureTimelineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
