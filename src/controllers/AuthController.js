import { PrismaClient } from '@prisma/client/extension'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()


export const register = async (req, res) => {

    const { name, email, password } = req.body

    if(!name|| !email || !password) return res.status(400).send("Username and password are required.")

    const hashedPassword = bcrypt.hashSync(password, 10)
    const newUser = await prisma.user.create({
        data:{
            username,
            email,
            password
        }
    })

    res.status(201).send("User registered successfully!")

}

export const login = async (req, res) => {

    const { email, password } = req.body

    const user = await prisma.user.find({
        where: { id }
    })

    if(user){
        // Login
    }else{
        //Throw error
    }
}