import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

app.get('/' , (req , res) => {
    res.send("Server is runniug...")
})

const PORT = process.env.Port || 5000 ;
app.listen(PORT , ()=> console.log(`Server is runnig on port ${PORT }`))
