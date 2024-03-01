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
            'firstName': 'Ilham',
            'lastName': 'Kurniawan',
            'jobTitle': 'Software Engineer',
            'dob': '1990-10-05',
            'salary': 7000000,
            'address': 'Jalan Merdeka Raya',
            'gender': 'Male',
            'isMarried': true
        },
        {
            'id': uuidv4(),
            'firstName': 'Windi',
            'lastName': 'Suprati',
            'jobTitle': 'Accountant',
            'dob': '1985-01-20',
            'salary': 4700000,
            'address': 'Perumahan Cipete, Jakarta',
            'gender': 'Female',
            'isMarried': false
        },
        {
            'id': uuidv4(),
            'firstName': 'Michael',
            'lastName': 'Jacksons',
            'jobTitle': 'Network Administrator',
            'dob': '2000-01-01',
            'salary': 8000000,
            'address': 'Scientia Raya No. 18',
            'gender': 'Male',
            'isMarried': false
        }
]);
    
    customerList$ = this.customer_list.asObservable();
    addData = (data: any) => {
        const existCustomer = this.customer_list.value.find(customer => customer.id == data.id)
        if(existCustomer) {
            Object.assign(existCustomer, data)
        } else {
            const current_list = this.customer_list.value;
            const updated_list = [...current_list, data]
            this.customer_list.next(updated_list);
        }
    }

    getData = () => {
        return this.customer_list.value
    }

    getDatabyId = (id: string) => {
        return this.customer_list.value.find(customer => customer.id == id);
    }

    deleteData = (id: string) => {
        const index = this.customer_list.value.findIndex(customer => customer.id == id)
        if(index > -1) {
            this.customer_list.value.splice(index, 1)
        }
    }
}