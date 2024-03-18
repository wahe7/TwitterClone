import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import express from "express";

const router = express.Router();

router.post("/",async (req,res)=>{
    const {firstname,lastname,username,email,password}=req.body;

  let user= await prisma.user.create({
        data:{
            firstname,
            lastname,
            username,
            email,
            password
        }
    })

    res.send({user});
})




export default router;