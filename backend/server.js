const express=require("express")
const app=express()
const mongoose=require("mongoose")
const cors=require("cors")
app.use(express.json())
app.use(cors())
PORT=8080
mongoose.connect("mongodb+srv://77gnp4p:2830Sfcd@cluster0.exhhdx2.mongodb.net/").then(()=>{
    console.log("db connected")
    
})

const homeSchema=mongoose.Schema({
    image:{
        type:String
    },
    name:{
        type:String
    },
    age:{
        type:Number
    },

})
homeModel=mongoose.model("homeModel",homeSchema)
app.get("/home", async (req,res)=>{
    const data=await homeModel.find()
    res.send(data)
})
app.get("/home/:id",async(req,res)=>{
    const{id}=req.params
    const target=await homeModel.findById(id)
    res.send(target)
})



app.post("/home",async(req,res)=>{
    const newHome=homeModel({
        ...req.body
    })
    await newHome.save()
    res.send("post olundu")
})
app.delete("/home/:id",async(req,res)=>{
    const{id}=req.params 
    await homeModel.findByIdAndDelete(id)
    res.send("delete olundu")
})

app.listen(PORT,()=>{
    console.log(`app running ${PORT}`)
})
