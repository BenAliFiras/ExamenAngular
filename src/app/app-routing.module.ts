import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { BadgesComponent } from './badges/badges.component';
import { UpdateBadgeComponent } from './update-badge/update-badge.component';

const routes: Routes = [
  {path:'', redirectTo:"admin", pathMatch:"full"},
  {path:'admin', component:DashboardAdminComponent, children:[
    {path:'badges', component:BadgesComponent}
  ]},
  {path:'badges/:id', component:UpdateBadgeComponent},
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
