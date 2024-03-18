import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import express from "express";

const router = express.Router();

router.put("/:id",async (req,res)=>{
    
                   
                    const id=req.params.id;
                       const user = await prisma.user.findUnique({
                        where: {
                          id:Number(id)
                        },
                      })

                      const email=user?.email;
                   
                    const {firstname,lastname,username,emailn,password}=req.body;
                    const updateUser = await prisma.user.update({
                        where: {
                          email: email,
                        },
                        data: {
                            firstname:firstname,
                            lastname:lastname,
                            username:username,
                            password:password


                        },
                      })

                      res.send({updateUser})
                 
    
})




export default router;