const mongoose = require(mongoose);

const PatientSchema = mongoose.Schema(
    {
        /* _id-ra nincs szükség, mert a mongoDB automatikusan kezeli
    _id: {
        type: mongoose.Schema.Types.ObjectId,
    }, */
        name: {
            type: String,
            required: true,
        },
        personalId: {
            type: String,
            required: true,
        },
        dob: {
            type: Date,
            required: true,
        },
        phone: {
            type: string,
            required: true,
        },
        email: {
            type: string,
            required: true,
        },
        vaccine: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Vaccine',
            required: true,
        },
        vaccinations: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'Vaccination'
        },
        active: {
            type: Boolean,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.module('Patient', PatientSchema);

/*
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
    active: boolean = true;
}

*/
