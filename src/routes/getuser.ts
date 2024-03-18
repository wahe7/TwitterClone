import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import express from "express";

const router = express.Router();

router.get("/:username",async (req,res)=>{
    

  const username=req.params.username;
  
  const user = await prisma.user.findUnique({
    where: {
      username:username,
    },
  })

  res.send({user});
    
})




export default router;