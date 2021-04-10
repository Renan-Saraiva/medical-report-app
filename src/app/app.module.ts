import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigService } from './services/config.service';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { EditorComponent } from './components/editor/editor.component';
import { EmployeesGridComponent } from './components/employees-grid/employees-grid.component';
import { GenderNamePipe } from './pipes/gender-name.pipe';
import { SkillsNamePipe } from './pipes/skills-name.pipe';
import { HospitalizationComponent } from './pages/hospitalization/hospitalization.component';
import { ReportComponent } from './components/report/report.component';
import { InteractionsTimelineComponent } from './components/interactions-timeline/interactions-timeline.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { InterationReportTimelineItemComponent } from './components/interation-report-timeline-item/interation-report-timeline-item.component';
import { InterationMedicationTimelineItemComponent } from './components/interation-medication-timeline-item/interation-medication-timeline-item.component';
import { InterationParametersMeasureTimelineItemComponent } from './components/interation-parameters-measure-timeline-item/interation-parameters-measure-timeline-item.component';

const appConfig = (configService: ConfigService) => {
  return () => {
    return configService.loadConfigJSON();
  }
}

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EditorComponent,
    EmployeesGridComponent,
    GenderNamePipe,
    SkillsNamePipe,
    HospitalizationComponent,
    ReportComponent,
    InteractionsTimelineComponent,
    NotFoundComponent,
    InterationReportTimelineItemComponent,
    InterationMedicationTimelineItemComponent,
    InterationParametersMeasureTimelineItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ ConfigService, {
    provide: APP_INITIALIZER,
    useFactory: appConfig,
    multi: true,
    deps: [ConfigService]
  },
  { provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
