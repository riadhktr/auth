const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userSchema = require('../models/userModel');


// register 

exports.register = async(req,res)=>{
try{
const {name,email,password} = req.body;
// test sur l'existance de l'email
const exist = await userSchema.findOne({email});
if(exist){
    return res.status(400).json({msg:"email adress already used "})
}

// creation du compte
 const newUser = await new userSchema(req.body);
 const saltRounds = 10;
 const salt = bcrypt.genSaltSync(saltRounds);
 const hash = bcrypt.hashSync(password,salt);
 newUser.password = hash;
 // creation du token 
 const payload = {id : newUser._id};
 var token = jwt.sign(payload,"first");
 newUser.save();
 res.status(200).json({msg:"user created with sucess",newUser});

}catch(err){
res.status(500).json({msg:"you can't create an account now"})
}
}

exports.allUsers = async(req,res)=>{
    try{
    const users = await userSchema.find();
    res.status(200).json({msg:'list of users',users})
    }catch(err){
res.status(500).json({msg:"server error"})
    }
}

// login 

exports.login = async(req,res)=>{
    try{
        const{email,password} = req.body;
        const found = await userSchema.findOne({email});
        if(!found){
            return res.status(400).json({msg:"no account with this email"})
        }
        // found true 
        const match = await bcrypt.compare(password,found.password);
        if(!match){
            return res.status(400).json({msg:"invalid credantials"})
        }
        const payload = {id: found._id};
        const token = jwt.sign(payload,"first");
       res.status(200).json({msg:"user logged in with sucess",token,found})
    }catch(err){
    res.status(500).json({msg:"server error"})
    }
}