import { AdverseEvent } from "./adverse-event";
import { Patient } from "./patient";
import { Place } from "./place";
import { Vaccine } from "./vaccine";

export class Vaccination {
    _id: string = '';
    patient: Patient = new Patient();
    vaccine: Vaccine = new Vaccine;
    date: Date = new Date();
    dose: number = 0; // Number of dose administered
    injectionSite: string = '';
    injectionType: string = '';
    adverseEvent: AdverseEvent = new AdverseEvent;
    eeszt: boolean = false; // EESZT documentation
    place: Place = new Place;
    // comment:  string = ''
}