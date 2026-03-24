import express from "express"


const app = express();
const PORT = 8080

app.get("/",(req,res)=>{
    res.send({msg:"Hey from EC2"})
})

app.get("/:name",(req,res)=>{
    const name = req.params.name;

    if(name=== "sharvari"){
        res.send("hey Baby ")
    }
    console.log(name);
    res.send({msg:`hello ${name}`})
    
})

app.listen(PORT,()=>{
    console.log(`Server is running on PORT:${PORT}`);
    
})