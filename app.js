// <!--- Import statements --->
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

// <!--- Routes --->
const register=require('./routes/register');
const login=require('./routes/login');
const building=require('./routes/building');
const tank=require('./routes/tank');
const check=require('./routes/check');
const sensor=require('./routes/sensor');

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.use('/register',register);
app.use('/login',login);
app.use('/building',building);
app.use('/tank',tank);
app.use('/check',check);
app.use('/sensor',sensor);

app.listen(3000,()=>{
    console.log("server is running on port 3000");
});