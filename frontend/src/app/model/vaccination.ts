import { Vaccine } from "./vaccine";

export class Vaccination {
    vaccine: Vaccine = new Vaccine;
    date: Date = new Date();
    dose: number = 0; // Number of dose administered
    injectionSite: string = '';
    injectionType: string = '';
    adverseEvent: boolean = false; // Adverse event after vaccination true/false
    aeDescription: string = ''; // Adverse event description
    // comment:  string = '';
}
