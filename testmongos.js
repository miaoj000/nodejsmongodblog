const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')
const schema = {name: String,age:Number,health:String,hobby:String}
const cats = mongoose.model('cats', schema)

// const kitty = new Cat({ name: 'zhao'})
// kitty.save().then(() => console.log('testzhao'))
// const kitty1 = new Cat({name:"zhang", age:3, health:'great'})
// kitty1.save().then(() => console.log('testzhang'))
cats.find({name:'zhang'},(err,data)=>{
    console.log(data[0]._doc.name)
})