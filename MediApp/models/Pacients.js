import { mongoose } from "mongoose";

const Schema = mongoose.Schema;

const appointmentSchema = new Schema ({
    name: {
        type: String,
        required: [true, "Pacient name is required."]
    },
    birthDate:{
        type: Date,
        required: [true, "Birth Date is required."]
    },
    email:{
        type: String,
        required: [true, "E-mail contact is required."]
    },
    phone:{
        type: String,
        required: [true, "Phone number is required."]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}
);

const appointment = mongoose.model("Pacient", pacientSchema);
export default appointment;