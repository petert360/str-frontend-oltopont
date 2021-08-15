import { Patient } from "./patient";

export class AdverseEvent {
    _id?: string = '';
    patient: Patient = new Patient;
    date: Date = new Date(); // Date reported
    description: string = ''; // Description of the adverse event
}
