const express=require("express")

const router=express.Router()

const Contact=require("../models/Contact")
router.post("/add",async(req,res)=>{
    const{name,email,phone}=req.body

    try{
        const newContact=new Contact({name,email,phone})
        const contact =await newContact.save()
        res.send({msg:"contact added ",contact})

    }
    
    catch(error){
        console.log(error)

    }
})

//
router.get("/",async(req,res)=>{
    try{
const contacts=await Contact.find()
res.send({msg:"data fetched",contacts})
    }
    catch(error){
console.log(error)
    }
})

router.delete("/delete/:id",async(req,res)=>{
    const{id}=req.params;
    try{
const contact=await Contact.findOneAndDelete({_id:id})
res.send({msg:"contact deleted",contact})
    }
    catch(error){
        console.log(error)

    }
})

router.put("/edit/:_id",async(req,res)=>{

    const {_id}=req.params;
    try{
const contact=await Contact.findByIdAndUpdate({_id},{$set:req.body})
res.send({msg:"contact edited",contact})
    }
    catch(error){
        console.log(error)

    }
})

module.exports=router