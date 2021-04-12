import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
import { HospitalizationsService } from 'src/app/services/hospitalizations.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private router: Router, public hospitalizationsService: HospitalizationsService) { }

  ngOnInit(): void {
    
  }


  Logout() {
    this.hospitalizationsService.isAuth = false;
    this.router.navigate(['/login']);
  }

}
