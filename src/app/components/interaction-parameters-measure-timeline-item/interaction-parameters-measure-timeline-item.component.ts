import { Component, Input, OnInit } from '@angular/core';
import { Interaction } from 'src/app/models/interaction';

@Component({
  selector: 'app-interaction-parameters-measure-timeline-item',
  templateUrl: './interaction-parameters-measure-timeline-item.component.html',
  styleUrls: ['./interaction-parameters-measure-timeline-item.component.css']
})
export class InteractionParametersMeasureTimelineItemComponent implements OnInit {

  @Input("interaction") interaction: Interaction;

  constructor() { }

  ngOnInit(): void {
  }

}
