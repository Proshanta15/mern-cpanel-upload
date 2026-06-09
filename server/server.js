import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { errorMiddleware } from "./middlewares/error-middleware.js";
import adminRouter from "./router/admin-router.js";
import authRouter from "./router/auth-router.js";
import contactRouter from "./router/contact-router.js";
import serviceRouter from "./router/service-router.js";
import connectDb from "./utils/db.js";

dotenv.config();
const app = express();

app.use(express.json());

let corsOptions = {
    origin: 'http://localhost:5174',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
}

app.use(cors(corsOptions));

app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);
app.use("/api/data", serviceRouter);

// Admin routes
app.use("/api/admin", adminRouter);

app.use(errorMiddleware);

const port = process.env.PORT || 5000;

connectDb().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
})