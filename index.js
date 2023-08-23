const express = require("express");

const server = express()
const PORT = 4000

server.use(express.json())

server.listen(PORT, () => console.log(`Server is running on ${PORT} `))

server.get('/home', (request, response) => 
    response.send('<h1>Run this Server up!</h1>')
) 

/*server.post('/home', (request, response) => { 
    console.log(request.body)
    response.json({
        message: "Server Info",
        name: request.body.name,
        age: request.body.age
    })
})

server.put('/home/:id', (request, response) => {
    console.log(request.body);
    response.json({
        message: "Server updated"
    })
})

server.delete('/home/:id', (request, response) => {
    console.log(request.params);
    response.json({
        message: "serving you"
    })
})*/