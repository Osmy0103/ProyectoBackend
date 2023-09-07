import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from 'cors';

import authRoutes from "./routes/auth.routes.js";
import pendRoutes from './routes/pendientes.routes.js';

const app = express()

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/creadas", authRoutes);
app.use("/creadas",pendRoutes)






export default app;