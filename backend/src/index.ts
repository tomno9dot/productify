import express from 'express'
import {ENV} from './config/env'
import { clerkMiddleware } from '@clerk/express'
import cors from 'cors'
import userRoutes from './routes/userRoutes'
import productRoutes from './routes/productRoutes'
import commentRoutes from './routes/commentRoutes'



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

app.use("/api/users", userRoutes)
app.use("/api/products", productRoutes)
app.use("/api/comments", commentRoutes)

app.listen(ENV.PORT, () => console.log("Server running on port:", ENV.PORT))