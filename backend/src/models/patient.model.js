const mongoose = require('mongoose');

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
        appointment: {
            type: Date,
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
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        vaccine: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Vaccine',
            required: true,
        },
        vaccinations: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'Vaccination',
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

module.exports = mongoose.model('Patient', PatientSchema);