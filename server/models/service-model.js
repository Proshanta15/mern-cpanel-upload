import { Schema, model } from "mongoose";

// Define a schema for the service form

const serviceSchema = new Schema({
    service: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    provider: {
        type: String,
        required: true
    }
})

const Service = new model("Service", serviceSchema);

export default Service;