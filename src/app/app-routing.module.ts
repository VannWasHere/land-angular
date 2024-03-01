import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path: '', redirectTo:'/customers',  pathMatch:'full'},
  {path: 'customers', component: OverviewComponent},
  {path: 'form', component: FormComponent},
  {path: 'form/:id', component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
