import { Vaccine } from "./vaccine";

export class Vaccination {
    vaccine: Vaccine = new Vaccine;
    date: Date = new Date();
    number: number = 0; // Number of vaccination
    injectionSite: string = '';
    injectionType: string = '';
    adverseEvent: boolean = false;
    aeDescription: string = ''; // Adverse Event description
    // comment:  string = '';
}
