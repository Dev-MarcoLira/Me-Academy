import express from 'express'

const router = express.Router()

import { login, register, getProfile } from '../controllers/AuthController'
import { authenticateJWT } from '../middlewares/jwt'

router.post("/login", login)
router.post("/register", register)
router.get("/profile", authenticateJWT, getProfile)

export default router