import express from "express"
import noteRoutes from "./routes/notesRoutes.js"
import {connectDB} from "./config/db.js"
import dotenv from "dotenv"
import rateLimiter from "./middlware/rateLimiter.js";
import cors from "cors";

dotenv.config();

const app = express()
const PORT = process.env.PORT || 5001;


//middleware
app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(express.json());    //this middleware will parse JSON body: req.body access
app.use(rateLimiter);
app.use(cors());

//our own simple middleware
// app.use((req,res,next) => {
//     console.log(`Req method is ${req.method} and Req URL is ${req.url}`);
//     next();
// });

app.use("/api/notes",noteRoutes);

connectDB().then( () => {
    app.listen(PORT, () => {
    console.log('Server server started on PORT:',PORT); 
    })
});
