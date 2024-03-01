import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { FormComponent } from './form/form.component';
import { Customer360Component } from './customer-360/customer-360.component';

const routes: Routes = [
  {path: '', redirectTo:'/customers',  pathMatch:'full'},
  {path: 'customers', component: OverviewComponent},
  {path: 'form', component: FormComponent},
  {path: 'form/:id', component: FormComponent},
  {path: 'details', component: Customer360Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
