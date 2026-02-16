import { mongoose } from "mongoose";

const Schema = mongoose.Schema;

const appointmentSchema = new Schema ({
    Date: {
        type: Date,
        required: [true, "Date of Prescription is required."]
    },
    appointmentID:{
        type: String,
        required: [true, "Appointment ID is required."]
    },
    medicine:{
        type: String,
        required: [true, "Medicine is required."]
    },
    dosage:{
        type: String,
        required: [true, "Dosage is required."]
    },
    instructions:{
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}
);

const appointment = mongoose.model("Appointment", appointmentSchema);
export default appointment;