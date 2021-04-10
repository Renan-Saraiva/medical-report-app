import { Component, Input, OnInit } from '@angular/core';
import { Interaction } from 'src/app/models/interaction';

@Component({
  selector: 'app-interaction-medication-timeline-item',
  templateUrl: './interaction-medication-timeline-item.component.html',
  styleUrls: ['./interaction-medication-timeline-item.component.css']
})
export class InteractionMedicationTimelineItemComponent implements OnInit {

  @Input("interaction") interaction: Interaction;

  constructor() { }

  ngOnInit(): void {
  }

}
