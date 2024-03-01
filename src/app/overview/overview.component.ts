import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent implements OnInit {
  customerList: any[] = [];
  constructor(
    private customerService: CustomerService,
    private router: Router
    ){}
  // OnInit => When the component rendered this func will run 
  ngOnInit() {
    this.customerList = this.customerService.getData()
  }

  // Methods
  editData(id: string) {
    this.router.navigate(['/form'], {queryParams: {uid: id}})
  }

  viewData(id: string) {
    this.router.navigate(['/details'], {queryParams: {uid: id}})
  }

  deleteData(id: string) {
    this.customerService.deleteData(id)
  }
}
