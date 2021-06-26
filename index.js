var express = require('express')
var app = express()
const port = 5000
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://wwwpyk:qkrdbsrnr00!@wwwpyk.k18gr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify:false
}).then(()=>console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => res.send('hihihi!asdfsdfsdf'))
app.listen(port, ()=> console.log('Example app listening on port${port}!'))