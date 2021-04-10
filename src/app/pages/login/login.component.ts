import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

  }

  Login() {    
    this.router.navigate(['/hospitalizations/0156f25c-5dd0-4b9e-b820-6f994734348a']);
  }

}
