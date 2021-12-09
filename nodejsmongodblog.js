const express = require('express')
const ejs = require('ejs')
const testa=require('./testModule.js')
const app = express()
app.use('/',express.static('public'))
app.use('/',express.static('private'))
app.use('/',express.static('href'))
app.use('/href2',express.static('html2'))
// app.use('/', (req, res) => {
//     res.send('Hello World! USE')
// })
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
var num1 = 0.0
var num2 = 0.0
var oper = ""
app.get('/input', function (req, res, next) {
    // console.log(req.body)
    num1 = parseFloat(req.query.num1)
    num2 = parseFloat(req.query.num2)
    oper = req.query.sub
    next()
})
app.post('/input', function (req, res, next) {
    // console.log(req.body)
    num1 = parseFloat(req.body.num1)
    num2 = parseFloat(req.body.num2)
    oper = req.body.sub
    next()
})
// var first=parseFloat(req.body.num1)
app.use('/input', (req, res,next) => {
    // res.send(num1+';'+num2)
    // res.sendFile(__dirname+"/html2/html2.html",(err)=>{
    //     if(err)console.log(err)
    // })
    if(oper==='+'){
        ejs.renderFile('./private/index.html',{result:testa.add_ab(num1,num2)},function(err,str){
            if(err){console.log(err)}
            else{
                res.send(str)
            }
        })
    }
    else if(oper==='-'){
        ejs.renderFile('./private/index.html',{result:testa.sub_ab(num1,num2)},function(err,str){
            if(err){console.log(err)}
            else{
                res.send(str)
            }
        })
    }
    else if(oper==='*'){
        ejs.renderFile('./private/index.html',{result:testa.mul_ab(num1,num2)},function(err,str){
            if(err){console.log(err)}
            else{
                res.send(str)
            }
        })
    }
    else if(oper==='/'){
        ejs.renderFile('./private/index.html',{result:testa.div_ab(num1,num2)},function(err,str){
            if(err){console.log(err)}
            else{
                res.send(str)
            }
        })
    }
    next()
    // if(req.body.sub === '+'){

    // }
    // res.json(req.body)
    // res.send('GET received!')
})
app.use('/input',(req,res)=>{
    res.send('error')
})
app.listen(3001)