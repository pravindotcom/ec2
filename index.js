import express from "express"


const app = express();
const PORT = 8080

app.get("/",(req,res)=>{
    res.send({msg:"Hey from EC2"})
})

app.listen(PORT,()=>{
    console.log(`Server is running on PORT:${PORT}`);
    
})