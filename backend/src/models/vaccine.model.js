const mongoose = require(mongoose);

const VaccineSchema = mongoose.Schema(
    {
/* _id-ra nincs szükség, mert a mongoDB automatikusan kezeli
    _id: {
        type: mongoose.Schema.Types.ObjectId,
    }, */
        manufacture: String,
        product: String,
        lot: String,
        doseInterval: Number,
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.module('Vaccine', VaccineSchema);

/*
export class Vaccine {
    _id: string = '';
    manufacture: string = '';
    product: string = '';
    lot: string = '';
    doseInterval: number = 0; // Days between first and second doses
}
*/
