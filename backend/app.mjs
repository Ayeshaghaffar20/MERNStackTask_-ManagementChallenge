import express from "express"
import cors from "cors"
import "dotenv/config"
import connectedDB from "./db/db.js"
import cookieParser from "cookie-parser"
import userRoutes from "./Routes/userRoutes.js"


const app = express()
app.use(cors({credentials: true }))
app.use(express.json())
app.use(cookieParser())
const allowedOrigin = ['http://localhost:5173']


app.use(cors({ origin: allowedOrigin, credentials: true }))
const PORT = process.env.PORT

app.get("/" ,(req,res)=>{
    res.send("WELCOME TO CHERRYMART API!")
})


// conected to mongodb
connectedDB()

app.use('/api/users',userRoutes)


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    

})