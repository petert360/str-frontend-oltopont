const mongoose = require('mongoose');

const VaccineSchema = mongoose.Schema(
    {
        /* _id-ra nincs szükség, mert a mongoDB automatikusan kezeli
    _id: {
        type: mongoose.Schema.Types.ObjectId,
    }, */
        manufacture: {
            type: String,
            required: true,
        },
        product: {
            type: String,
            required: true,
        },
        lot: {
            type: String,
            required: true,
        },
        doseInterval: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Vaccine', VaccineSchema);
