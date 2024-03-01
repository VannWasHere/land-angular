import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/data.service';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent implements OnInit {
  customerList: any[] = [];
  constructor(private customerService: CustomerService){}
  // OnInit => When the component rendered this func will run 
  ngOnInit() {
    this.customerList = this.customerService.getData()
  }
}
