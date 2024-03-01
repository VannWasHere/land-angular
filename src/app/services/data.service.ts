import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable ({
    providedIn: 'root'
})
export class CustomerService{
    private customer_list = new BehaviorSubject<any>(null);
    customerList$ = this.customer_list.asObservable();

    addData = (data: object) => {
        const current_list = this.customer_list.value;
        const updated_list = {...current_list, data}
        this.customer_list.next(updated_list);
    }
}