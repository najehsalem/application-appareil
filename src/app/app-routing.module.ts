import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApparielDashboardComponent } from './appariel-dashboard/appariel-dashboard.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: "appareils", component:ApparielDashboardComponent},
  { path: "auth", component:AuthComponent},
  { path: "", component:ApparielDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
