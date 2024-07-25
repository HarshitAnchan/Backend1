const express= require('express');
const app = express();
const userModel = require('./usermodel');
const usermodel = require('./usermodel');

app.get("/", (req, res)=>{
 res.send("successfull")
})

app.get("/create", async (req, res)=>{
  let createduser =  await userModel.create({
    name: "harshit",
    email: "harshit@gmail.com",
    username: "harshit"
   })
      

    res.send(createduser)

    })

    
app.get("/read",async (req, res)=>{
    let users = await userModel.find();
    res.send(users)
})    



app.get("/update", async (req, res)=>{
      let updateduser = await userModel.findOneAndUpdate({username: "harshit"}, {name: "Alisha"}, {new: true})
          res.send(updateduser)
      
    })


app.get("/delete",async (req, res)=>{
    let users = await userModel.findOneAndDelete({name: "harshit"});
    res.send(users)
})    




app.listen(3000);
