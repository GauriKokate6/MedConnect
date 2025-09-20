import express from 'express'
import cors from 'cors'
import 'dotenv/config' 
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoute.js'

const app=express()

const port=process.env.PORT || 4000

app.use(cors({origin:true,credentials:true}))

connectDB()

connectCloudinary()

app.use(express.json())



//api endpoints
app.use('/api/admin',adminRouter)
app.use('/api/doctor',doctorRouter)
app.use('/api/user',userRouter)
// localhost:4000/api/admin/add-doctor
app.get('/',(req,res)=>{
    res.send('API WORKING smoothly')
})

app.listen(port, ()=> console.log("server started",port))