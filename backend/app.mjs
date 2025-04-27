import express from "express"
import cors from "cors"
import "dotenv/config"
import connectedDB from "./db/db.js"
import cookieParser from "cookie-parser"
import userRoutes from "./Routes/userRoutes.js"
import taskRouter from "./Routes/taskRoutes.js"


const app = express()
app.use(cors({credentials: true }))
app.use(express.json())
app.use(cookieParser())
const allowedOrigin = ['http://localhost:5173','https://mern-stack-task-management-challenge.vercel.app']


app.use(cors({ origin: allowedOrigin, credentials: true }))
const PORT = process.env.PORT

app.get("/" ,(req,res)=>{
    res.send("WELCOME TO Task")
})


// conected to mongodb
connectedDB()

app.use('/api/users',userRoutes)
app.use('/api/task',taskRouter)



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    

})