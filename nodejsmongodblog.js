const express = require('express')
const app = express()
const mongoose = require('mongoose')
const ejs = require('ejs')
// mongoose.connect('mongodb://172.21.2.236/190110910520')
mongoose.connect('mongodb://localhost:27017/test1')
const schema = {first:Number, second:Number}
const nums = mongoose.model('nums', schema)
app.use('/',express.static('public'))
// app.use('/', (req, res) => {
//     res.send('Hello World! USE')
// })

app.get('/input', function (req, res) {
    // console.log(req.body)
    res.send(req.query)
    num1 = parseFloat(req.query.num1)
    num2 = parseFloat(req.query.num2)
    var num = new nums({first:num1,second:num2})
    num.save()
    ejs.renderFile('result.html',{returnVal:"success"},(err,str)=>{
        // console.log(err)
        res.send(str)
    })
})

app.listen(10520)