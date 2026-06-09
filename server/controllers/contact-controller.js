import Contact from "../models/contact-model.js";

const contactForm = async (req, res) => {
    try {
        const response = req.body;
        await Contact.create(response);
        res.status(201).json({ message: "Contact form submitted successfully" });
    } catch (error) {
        next(error);
    }
};

export { contactForm };

