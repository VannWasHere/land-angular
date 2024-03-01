import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared.module';

import { FormApp } from './form-app.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    FormApp,
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class FormModuleModule { }
