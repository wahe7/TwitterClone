import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import {verifyToken} from "../utils/auth"
import express from "express";

const router = express.Router();

router.post("/",verifyToken ,async (req,res)=>{
    
              
            const {title,content}=req.body;
            
            const userid=req.user.id;
            let tweet=await prisma.tweet.create({
                data:{
                    title,
                    content,
                    userid
                }
            })

            console.log(tweet);
            res.send({tweet});

    
})




export default router;