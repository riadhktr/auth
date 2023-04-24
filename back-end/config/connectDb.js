const mongoose = require('mongoose');


const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://RiadhKtr:TyY9BXXExgWNBAun@cluster1.hbozg.mongodb.net/workshop?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log('database connected')
    }).catch((err)=>{
        console.log(err)
    })

} 

module.exports = connectDB