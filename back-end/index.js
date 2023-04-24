const express = require('express');
const app = express();
const port = 4000;
const connectDB = require('./config/connectDb');
const userRoutes = require('./routes/userRoute');
const cors = require('cors');


connectDB();
app.use(express.json());
app.use(cors({origin:"http://localhost:3000"}))
app.use('/api',userRoutes);

app.listen(port,(err)=>{
    (err)? console.log(err): console.log('server started with sucess')
})