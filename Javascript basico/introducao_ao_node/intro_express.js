const express = require('express')


const app = express()

app.get('/',(req, res) =>{
    return res.send("Olá,Mundo")
})

app.listen(3000, () =>{
    console.log("Escutando na porta 3000")
})