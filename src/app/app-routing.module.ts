import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HospitalizationComponent } from './pages/hospitalization/hospitalization.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
  { path: 'hospitalization/:id', component: HospitalizationComponent },
  { path: '**', component: NotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
