import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomerService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit{
  // Inject Customer Services
  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute
    ){}
  
    ngOnInit() {
      this.route.queryParams.subscribe((params) => {
          const customerId = params['uid'];
          if(customerId) {
              const customer = this.customerService.getDatabyId(customerId);
              this.customerForm.patchValue(customer);
              console.log(customer);
          }
      });
  }

  customerForm = new FormGroup({
    id: new FormControl(uuidv4()),
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
