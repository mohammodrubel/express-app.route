const express = require('express')
const app = express()
app.use(express.json())


app.route('/about/action')
    .get((req,res)=>{
        res.send('this is get method')
    })
    .post((req,res)=>{
        res.send('this is post method')
    })
    .put((req,res)=>{
        res.send('this is put method')
    })
    .delete((req,res)=>{
        res.send('this is delete method')
    })



app.listen(5000,()=>{
    console.log('linising port 5000')
})