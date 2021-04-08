import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HospitalizationComponent } from './pages/hospitalization/hospitalization.component';


const routes: Routes = [
  { path: '', redirectTo: '/hospitalization', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'hospitalization', component: HospitalizationComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
