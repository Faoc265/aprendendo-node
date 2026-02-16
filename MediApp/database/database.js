import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/medi-app");

const db = moongose.connection;

db.on("error", console.error.bind(console, "connection error: "));

db.once(
    "open", function(){
        console.log("Database conected sucessfally!");
    }
);

export default db;

