import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HospitalizationComponent } from './pages/hospitalization/hospitalization.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/hospitalizations/teste', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'hospitalizations/:id', component: HospitalizationComponent },
  { path: '**', component: NotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
