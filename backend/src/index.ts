import express from 'express'
import {ENV} from './config/env'
import { clerkMiddleware } from '@clerk/express'
import cors from 'cors'


const app = express()



app.use(clerkMiddleware())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors({
    origin: process.env.FRONTEND_URL
}))

app.get("/" , (req, res) => {
    res.send("Server running")
})

app.listen(ENV.PORT, () => console.log("Server running on port:", ENV.PORT))