import { AdverseEvent } from "./adverse-event";
import { Vaccine } from "./vaccine";

export class Vaccination {
    vaccine: Vaccine = new Vaccine;
    date: Date = new Date();
    dose: number = 0; // Number of dose administered
    injectionSite: string = '';
    injectionType: string = '';
    adverseEvent: AdverseEvent = new AdverseEvent;
    eeszt: boolean = false; // EESZT documentation
    // comment:  string = ''
}