import { Patient } from "./patient";

export class AdverseEvent {
    patient: Patient = new Patient;
    reported: Date = new Date(); // Date reported
    description: string = ''; // Description of the adverse event
}
