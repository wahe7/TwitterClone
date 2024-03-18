import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import express from "express";

const router = express.Router();

router.get("/",async (req,res)=>{
    

  const users = await prisma.user.findMany();

  res.send({users});

    
})




export default router;