import express from "express";

import userRoute from "./routes/user";
import alluser from "./routes/alluser";
import deluser from "./routes/deluser";
import getuser from "./routes/getuser";
import getuserId from "./routes/getuserId";
import tweetroute from "./routes/tweetroute";




const app=express();
const PORT=2000;
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("<h1>Twitter clone</h1>")
})

app.use("/user",userRoute);

app.use("/user",alluser);
app.use("/del",deluser);
app.use("/user",getuser);
app.use("/user",getuserId);
app.use("/tweet",tweetroute);

app.listen(PORT,()=>{
    console.log("connected");
})