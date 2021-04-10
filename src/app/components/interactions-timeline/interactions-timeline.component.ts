import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { toArray } from 'rxjs/operators';
import { InteractionType } from 'src/app/enums/interaction-type';
import { InteractionsOnDate } from 'src/app/models/interactions-on-date';
import { HospitalizationsService } from 'src/app/services/hospitalizations.service';

@Component({
  selector: 'app-interactions-timeline',
  templateUrl: './interactions-timeline.component.html',
  styleUrls: ['./interactions-timeline.component.css']
})
export class InteractionsTimelineComponent implements OnInit {

  InteractionType = InteractionType;
  InteractionsOnDate$: Observable<InteractionsOnDate[]>;

  @Input("hospitalization-id") hospitalizationId: string;

  constructor(private hospitalizationsService: HospitalizationsService) { }

  ngOnInit() {
    this.getInteractions();
  }

  getInteractions() {
    this.InteractionsOnDate$ = this.hospitalizationsService.GetInteractionsGroupedByDate(this.hospitalizationId);
  }
}
