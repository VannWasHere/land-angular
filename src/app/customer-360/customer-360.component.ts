import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../services/data.service';
@Component({
  selector: 'app-customer-360',
  templateUrl: './customer-360.component.html',
  styleUrl: './customer-360.component.css'
})
export class Customer360Component implements OnInit {
  constructor(
    private customerService: CustomerService,
    private activateRoute: ActivatedRoute,
    ){}
    ngOnInit() {
      this.activateRoute.queryParams.subscribe((params) => {
          const customerId = params['uid'];
          if(customerId) {
              const customer = this.customerService.getDatabyId(customerId);
              this.customer_view = customer
          }
      });
    }
    customer_view: any = []
}
