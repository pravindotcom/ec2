import express from "express"


const app = express();
const PORT = 8080

aapp.get("/", (req, res) => {
  res.send("Welcome to AWS tutorial by Shivam Bhadani");
})

app.get("/product", (req, res) => {
  res.send("This is Product Page");
})

app.get("/health", (req, res) => {
  res.send("Everything is OK");
})

app.listen(PORT,()=>{
    console.log(`Server is running on PORT:${PORT}`);
    
})