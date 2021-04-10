import { Component, Input, OnInit } from '@angular/core';
import { Interaction } from 'src/app/models/interaction';


@Component({
  selector: 'app-interaction-report-timeline-item',
  templateUrl: './interaction-report-timeline-item.component.html',
  styleUrls: ['./interaction-report-timeline-item.component.css']
})
export class InteractionReportTimelineItemComponent implements OnInit {

  @Input("interaction") interaction: Interaction;

  constructor() { }

  ngOnInit(): void {
  }

}
