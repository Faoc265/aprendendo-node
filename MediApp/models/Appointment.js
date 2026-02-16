import { mongoose } from "mongoose";

const Schema = mongoose.Schema;

const appointmentSchema = new Schema ({
    Date: {
        type: Date,
        required: [true, "Appointment Date is required."]
    },
    doctorID:{
        type: String,
        required: [true, "DoctorID is required."]
    },
    pacientID:{
        type: String,
        required: [true, "pacientID is required."]
    },
    creatAt: {
        type: Date,
        default: Date.now
    }
}
);

const appointment = mongoose.model("Appointment", appointmentSchema);
export default appointment;