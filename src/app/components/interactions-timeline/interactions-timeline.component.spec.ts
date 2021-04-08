import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionsTimelineComponent } from './interactions-timeline.component';

describe('InteractionsTimelineComponent', () => {
  let component: InteractionsTimelineComponent;
  let fixture: ComponentFixture<InteractionsTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractionsTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionsTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
