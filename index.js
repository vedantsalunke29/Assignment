import express from "express"
import dotenv from "dotenv"
import cookieParser from 'cookie-parser'
import connectDB from './config/db.js'
import userRoutes from "./routes/userRoutes.js"
import cors from "cors"
import bodyParser from 'body-parser';



dotenv.config()

const port = process.env.PORT || 5000

connectDB();

const app = express();

app.use(bodyParser.json());

app.use(express.json())


const corsConfig = {
    origin: "*",
    methods: ["POST", "GET", "PATCH", "DELETE"],
    credential: true
}

app.use(cors(corsConfig));

app.use(cookieParser())


app.use("/api", userRoutes);



app.listen(port, () => console.log(`Server running on port: ${port}`))
