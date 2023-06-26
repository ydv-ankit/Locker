const express = require('express')

const app = express()

const PORT = process.env.PORT || 8080

app.listen(PORT, ()=>{
    console.log("server running at PORT: " + PORT)
})

app.get('/', (req, res)=>{
    res.send("server up")
})