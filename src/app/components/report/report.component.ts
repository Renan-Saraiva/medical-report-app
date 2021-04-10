import { Component, Input, OnInit } from '@angular/core';
import { Hospitalization } from 'src/app/models/hospitalization';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor() { }

  @Input("hospitalization") hospitalization: Hospitalization;

  ngOnInit(): void {
    
  }

}
