import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable ({
    providedIn: 'root'
})
export class CustomerService{
    private customer_list = new BehaviorSubject<any[]>([
        {
            'firstName': 'John',
            'lastName': 'Doe',
            'jobTitle': 'Software Engineer',
            'dob': '05 Aug 1990',
            'salary': 120000,
            'address': '123 Main St',
            'gender': 'Male',
            'isMarried': true
        },
        {
            'firstName': 'Jane',
            'lastName': 'Smith',
            'jobTitle': 'UX Designer',
            'dob': '20 Jan 1985',
            'salary': 95000,
            'address': '456 Oak Ave',
            'gender': 'Female',
            'isMarried': false
        },
        {
            'firstName': 'Michael',
            'lastName': 'Johnson',
            'jobTitle': 'Network Administrator',
            'dob': '15 Sep 1995',
            'salary': 80000,
            'address': '789 Pine Blvd',
            'gender': 'Male',
            'isMarried': true
        }    
]);
    
    customerList$ = this.customer_list.asObservable();
    addData = (data: object) => {
        const current_list = this.customer_list.value;
        const updated_list = [...current_list, data]
        this.customer_list.next(updated_list);
    }

    getData = () => {
        return this.customer_list.value
    }
}