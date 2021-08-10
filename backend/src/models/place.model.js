const mongoose = require('mongoose');

const PlaceSchema = mongoose.Schema(
    {
        /* _id-ra nincs szükség, mert a mongoDB automatikusan kezeli
    _id: {
        type: mongoose.Schema.Types.ObjectId,
    }, */
        hospital: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        building: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Place', PlaceSchema);

/*
export class Place {
    _id: string = '';
    hospital: string = '';
    address: string = '';
    building: string = '';
}
*/
