import { Vaccine } from "./vaccine";
import { Vaccination } from "./vaccination";

export class Patient {
    _id: string = '';
    name: string = '';
    personalId: string = ''; // TAJ or any other personal ID number
    dob: Date = new Date();
    phone: string = '';
    email: string = '';
    vaccine: Vaccine = new Vaccine;
    // riskGroup: string = '';
    vaccinations: Vaccination[] = []; 
}