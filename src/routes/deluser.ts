import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import express from "express";

const router = express.Router();

router.delete("/:id",async (req,res)=>{
    
                   
                    const id=req.params.id;
                   
                   
                    const user = await prisma.user.findUnique({
                        where: {
                          id: Number(id)
                        },
                      })

                      res.send({user});


                    const email=user?.email
                    const deleteUser = await prisma.user.delete({
                        where: {
                         id:Number(id),
                        },
                      })
    
                    res.send({deleteUser});
    
})




export default router;