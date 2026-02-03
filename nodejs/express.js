const express = require('express')

const app = express()

// create routes and server

app.get('/',(req, res)=>{

    res.send("aahhhdss");
})

app.get('/kallu',(req, res)=>{
    res.write('hello')
res.end()
})

app.listen(800)