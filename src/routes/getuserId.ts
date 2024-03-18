import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import express from "express";

const router = express.Router();

router.get("/:id",async (req,res)=>{
    
                   
                    const id=req.params.id;

                     let user = await prisma.user.findUnique({
                        where: {
                          id: Number(id)
                        },
                      })

                      res.send({user});
                   
             
    
})




export default router;