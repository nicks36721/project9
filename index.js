const express=require('express');
const app = express();

const data = require('./data');

const path = require('path');

const ejs = require('ejs')


// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

app.get('/',(req,res)=>{
    res.render("welcome")
})
app.get('/profile',(req,res)=>{
    res.render('profile',{data})
})
app.get('/profile/:userId',(req,res)=>{
    
    const user = data.find(user => user.id === +req.params.userId)

    if(!user) return res.status(404).render('err')
    res.render('index',{user})

})
app.listen(3000,()=>{
    console.log("server runing on port : 3000");
});