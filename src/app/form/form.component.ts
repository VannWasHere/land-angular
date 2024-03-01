import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomerService } from '../services/data.service';
@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  // Inject Customer Services
  constructor(private customerService: CustomerService){}

  customerForm = new FormGroup({
    firstName: new FormControl(''),
    jobTitle: new FormControl(''),
    lastName: new FormControl(''),
    dob: new FormControl(''),
    salary: new FormControl(''),
    address: new FormControl(''),
    gender: new FormControl(''),
    isMarried: new FormControl(false),
  });

  createUser = () => {
    // console.log(this.customerForm.value)
    const newCustomer = this.customerForm.value;
    this.customerService.addData(newCustomer);
    this.customerForm.reset()
  }
}
