import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { HospitalizationsService } from 'src/app/services/hospitalizations.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private hospitalizationsService: HospitalizationsService,
      private formBuilder: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      protocol: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  doLogin() {

    const loginData: Login = this.loginForm.value;
    this.hospitalizationsService.Login(loginData).subscribe((result: any) =>{
        console.log('result', result)
        this.router.navigate([`/hospitalizations/${result.idHospitalization}`]);
    })
  }

}
