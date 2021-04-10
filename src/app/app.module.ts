import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HospitalizationComponent } from './pages/hospitalization/hospitalization.component';
import { ReportComponent } from './components/report/report.component';
import { InteractionsTimelineComponent } from './components/interactions-timeline/interactions-timeline.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { InteractionReportTimelineItemComponent } from './components/interaction-report-timeline-item/interaction-report-timeline-item.component';
import { InteractionMedicationTimelineItemComponent } from './components/interaction-medication-timeline-item/interaction-medication-timeline-item.component';
import { InteractionParametersMeasureTimelineItemComponent } from './components/interaction-parameters-measure-timeline-item/interaction-parameters-measure-timeline-item.component';


registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HospitalizationComponent,
    ReportComponent,
    InteractionsTimelineComponent,
    NotFoundComponent,
    InteractionReportTimelineItemComponent,
    InteractionMedicationTimelineItemComponent,
    InteractionParametersMeasureTimelineItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
