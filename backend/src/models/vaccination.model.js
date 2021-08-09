const mongoose = require(mongoose);

const VaccinationSchema = mongoose.Schema(
    {
        /* _id-ra nincs szükség, mert a mongoDB automatikusan kezeli
    _id: {
        type: mongoose.Schema.Types.ObjectId,
    }, */
        vaccine: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Vaccine',
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        dose: {
            type: Number,
            required: true,
        },
        injectionSite: {
            type: String,
            required: true,
        },
        injectionType: {
            type: String,
            required: true,
        },
        adverseEvent: String,
        eeszt: {
            type: Boolean,
            required: true,
        },
        place: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Place',
            required: true,
        },
        // comment: String,
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.module('Vaccination', VaccinationSchema);

/*
import { AdverseEvent } from "./adverse-event";
import { Place } from "./place";
import { Vaccine } from "./vaccine";

export class Vaccination {
    _id: string = '';
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
}
*/
