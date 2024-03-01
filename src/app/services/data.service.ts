import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { v4 as uuidv4 } from 'uuid';
@Injectable ({
    providedIn: 'root'
})
export class CustomerService{
    private customer_list = new BehaviorSubject<any[]>([
        {
            'id': uuidv4(),
            'firstName': 'John',
            'lastName': 'Doe',
            'jobTitle': 'Software Engineer',
            'dob': '1990-10-05',
            'salary': 120000,
            'address': '123 Main St',
            'gender': 'Male',
            'isMarried': true
        },
        {
            'id': uuidv4(),
            'firstName': 'Jane',
            'lastName': 'Smith',
            'jobTitle': 'UX Designer',
            'dob': '1985-01-20',
            'salary': 95000,
            'address': '456 Oak Ave',
            'gender': 'Female',
            'isMarried': false
        },
        {
            'id': uuidv4(),
            'firstName': 'Michael',
            'lastName': 'Johnson',
            'jobTitle': 'Network Administrator',
            'dob': '1995-08-15',
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

    getDatabyId = (id: string) => {
        return this.customer_list.value.find(customer => customer.id == id);
    }
}