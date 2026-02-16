import { mongoose } from "mongoose";

const Schema = mongoose.Schema;

const doctorSchema = new Schema ({
    name: {
        type: String,
        required: [true, "Doctor name is requered."]
    },
     login: {
        type: String,
        required: [true, "Login is requered."],
        unique: true
    },
    Password: {
        type: String,
        required: [true, "Password is requered."],
    },
     medicalSpecialty: {
        type: String,
        required: [true, "Medial Specialty is requered."],
    },
       medicalRegistration: {
        type: String,
        required: [true, "Medical Registration is requered."],
        unique: true
    },
       email: {
        type: String,
        required: [true, "email is requered."],
    },
       phone: {
        type: String,
        required: [true, "Phone number is requered."],
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}
);

const doctor = mongoose.model("Doctor", doctorSchema);
export default doctor;