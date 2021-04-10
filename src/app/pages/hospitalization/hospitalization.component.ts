import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hospitalization } from 'src/app/models/hospitalization';
import { HospitalizationsService } from 'src/app/services/hospitalizations.service';

@Component({
  selector: 'app-hospitalization',
  templateUrl: './hospitalization.component.html',
  styleUrls: ['./hospitalization.component.css']
})
export class HospitalizationComponent implements OnInit {

  hospitalization: Hospitalization;
  isLoading: boolean = true;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private hospitalizationsService: HospitalizationsService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.getHospitalization(params["id"]);
      }
    )
  }

  getHospitalization(id: string) {
    this.hospitalizationsService.Get(id).subscribe(
      hospitalization => { 
        this.hospitalization = hospitalization;
        this.isLoading = false;
      },
      err => {
        this.isLoading = false;
        if (err.status == 404){
          this.router.navigate(['/not-found']);
        }
      }
    )
  }
}
