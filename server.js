require('dotenv').config();

const express = require("express");

const app = express()

const PORT = process.env.PORT;

app.get('/calc/:num1/:num2', (request,response) => {
    console.log("you are in get calc")
    let total =  parseInt(request.params.num1) + parseInt(request.params.num2);
    console.log(`The sum is ${total}`)
    response.send(`The sum is ${total}`)
})

//http://localhost:3000/someroute?operation=add
app.get('/someroute', (request,response) => {
    console.log("request.query: ", request.query)
    response.send('someroute accessed')
})

app.get('/calcquery/:num1/:num2', (request,response) => {
    console.log("you are in get calcquery")
    let result = 0
    switch (request.query.operation) {
          case 'add':
            result = parseInt(request.params.num1) + parseInt(request.params.num2)
            response.send(`The result is is ${result}`)
            break;
          case 'subtract':
            result = parseInt(request.params.num1) - parseInt(request.params.num2)
            response.send(`The result is ${result}`)
            break;
          case 'multiply':               
            result = parseInt(request.params.num1) * parseInt(request.params.num2)
            response.send(`The result is ${result}`)
            break;
          case 'divide':
            result = parseInt(request.params.num1) / parseInt(request.params.num2)
            response.send(`The result is ${result}`)
            break;
          default: 
            response.send('no operation found')         
    }
})


app.listen(PORT, () => {
    console.log('Express is listening on port: ', PORT)
})
