import { Schema, model } from "mongoose";

// Define a schema for the contact form
const contactSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

// Create a model for the contact schema
const Contact = new model("Contact", contactSchema);

export default Contact;