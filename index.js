import express from "express"


const app = express();
const PORT = 8080

app.get("/",(req,res)=>{
    res.send({msg:"Hey from EC2"})
})



app.get("/contact",(req,res)=>{
    res.send({message:"This is contact page"})
})

app.listen(PORT,()=>{
    console.log(`Server is running on PORT:${PORT}`);
    
})