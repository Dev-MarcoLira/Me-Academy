import express from 'express'
import { config } from "dotenv"
config()

import bodyParser from 'body-parser';

import attendanceRouter from 'routes/attendanceRoute'
import classRouter from 'routes/classRoute'
import authRouter from 'routes/authRoute'

const app = express();
const PORT = env("PORT");

// Middleware
app.use(bodyParser.json());

app.use('/api/auth', authRouter)
app.use('/api/attendance', attendanceRouter)
app.use('/api/class', classRouter)

app.listen(PORT || 3000, () =>{
    console.log(`Servern running on http://localhost:${PORT}`)
})