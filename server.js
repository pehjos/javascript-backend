import express from 'express'
import mongoose from 'mongoose'
import Cards from './dbCards.js'
import cors from 'cors'
//app config
const app=express()
const port =process.env.PORT||8001
const connection__url='mongodb+srv://admin:1x1erPmDJG1uMOZQ@cluster0.cmz9s.mongodb.net/tinderdb?retryWrites=true&w=majority'
//midle ware
app.use(express.json())
app.use(cors())
//db cofig
mongoose.connect(connection__url,{
useNewUrlParser:true,
useCreateIndex:true,
useUnifiedTopology:true,


})



//api end point
app.get('/',(req ,res)=>res.status(200).send("hello world"))
app.post("/tinder/cards",(req,res)=>{
const dbCard = req.body; 
Cards.create(dbCard,(err,data)=>{
if (err){
res.status(500).send(err)

}
else{

    res.status(201).send(data)
}
})
})

//get the data
app.get('/tinder/cards',(req,res)=>{

    Cards.find((err,data)=>{
        if (err){
        res.status(500).send(err)
        
        }
        else{
        
            res.status(200).send(data)
        }
        })
        })
        



//listenner
app.listen(port,()=>console.log(`listining on localhost:${port}`))



//1x1erPmDJG1uMOZQ
//mongodb+srv://admin:<password>@cluster0.cmz9s.mongodb.net/<dbname>?retryWrites=true&w=majority