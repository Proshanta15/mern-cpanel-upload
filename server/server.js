import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { errorMiddleware } from "./middlewares/error-middleware.js";
import adminRouter from "./router/admin-router.js";
import authRouter from "./router/auth-router.js";
import contactRouter from "./router/contact-router.js";
import serviceRouter from "./router/service-router.js";
import connectDb from "./utils/db.js";

// Get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// CORS configuration - allow your frontend domain
const corsOptions = {
    origin: ['https://pro.ecogreentex.eu.com', 'http://localhost:5173', 'http://localhost:5174'],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204
};
app.use(cors(corsOptions));

// ============ API ROUTES ============
// All API routes must start with /api
app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);
app.use("/api/data", serviceRouter);
app.use("/api/admin", adminRouter);

// ============ TEST ENDPOINT ============
app.get('/api/test', (req, res) => {
    res.json({ 
        message: 'API is working!', 
        timestamp: new Date().toISOString(),
        status: 'OK',
        endpoints: {
            auth: '/api/auth',
            contacts: '/api/admin/contacts',
            services: '/api/data/service',
            form: '/api/form'
        }
    });
});

// ============ LOGGING MIDDLEWARE ============
app.use('/api', (req, res, next) => {
    console.log(`📡 API Request: ${req.method} ${req.url}`);
    next();
});

// ============ SERVE REACT FRONTEND ============
// Path to your React build files (dist folder)
// This assumes: /home/ecogreen/pro.ecogreentex.eu.com/dist/
const rootPath = path.join(__dirname, '..');
console.log(`📁 Serving static files from: ${rootPath}`);

// Serve static files (CSS, JS, images, etc.)
app.use(express.static(rootPath));

// ============ HANDLE REACT ROUTER ============
// This is CRITICAL - it sends index.html for all non-API routes
// So React Router can handle them client-side
app.get('*', (req, res, next) => {
    // Skip API routes (they should have been handled already)
    if (req.path.startsWith('/api')) {
        return next();
    }
    // Send index.html for all other routes (/, /about, /service, /contact, etc.)
    res.sendFile(path.join(rootPath, 'index.html'));
});

// ============ ERROR HANDLER ============
app.use(errorMiddleware);

// ============ START SERVER ============
const port = process.env.PORT || 5000;import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { errorMiddleware } from "./middlewares/error-middleware.js";
import adminRouter from "./router/admin-router.js";
import authRouter from "./router/auth-router.js";
import contactRouter from "./router/contact-router.js";
import serviceRouter from "./router/service-router.js";
import connectDb from "./utils/db.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();

app.use(express.json());

let corsOptions = {
    origin: 'https://pro.ecogreentex.eu.com',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
};

app.use(cors(corsOptions));

// API Routes
app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);
app.use("/api/data", serviceRouter);
app.use("/api/admin", adminRouter);

// Test endpoint
app.get('/api/test', (req, res) => {
    res.json({ 
        message: 'API is working!', 
        timestamp: new Date().toISOString(),
        status: 'OK'
    });
});

// Serve React Frontend
const rootPath = path.join(__dirname, '..');
app.use(express.static(rootPath));

// ** THE FIX FOR REACT ROUTER **
// This route serves index.html for any request that isn't an API call
app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) {
        return next();
    }
    res.sendFile(path.join(rootPath, 'index.html'));
});

app.use(errorMiddleware);

const port = process.env.PORT || 5000;

connectDb().then(() => {
    app.listen(port, '0.0.0.0', () => {
        console.log(`✅ Server running on port ${port}`);
        console.log(`✅ Serving React app from: ${rootPath}`);
    });
}).catch(err => {
    console.error('❌ Database connection failed:', err);
});

connectDb().then(() => {
    app.listen(port, '0.0.0.0', () => {
        console.log(`✅ Server is running on port ${port}`);
        console.log(`✅ API available at: https://pro.ecogreentex.eu.com/api/`);
        console.log(`✅ Frontend available at: https://pro.ecogreentex.eu.com/`);
        console.log(`📁 Serving files from: ${rootPath}`);
    });
}).catch(err => {
    console.error('❌ Database connection failed:', err);
    process.exit(1);
});