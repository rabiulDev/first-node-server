const express = require("express")
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 5000;

const users = [
    { id: 1, name: "Rabiul", email: "rabiul.dev@gmail.com", job: "web developer" },
    { id: 2, name: "Nasim", email: "nasim.dev@gmail.com", job: "web developer" },
    { id: 3, name: "Karim", email: "karim.dev@gmail.com", job: "web developer" },
    { id: 4, name: "Rahim", email: "rahim.dev@gmail.com", job: "web developer" },
    { id: 5, name: "Bakar", email: "bakar.dev@gmail.com", job: "web developer" },
    { id: 6, name: "Kabir", email: "kabir.dev@gmail.com", job: "web developer" }
]
app.get('/', (req, res) => {
    res.send("this is my first node server")
})

app.get('/users', (req, res) => {
    if (req.query.name) {
        const queryName = req.query.name.toLowerCase()
        const result = users.filter(user => user.name.toLowerCase().includes(queryName))
        res.send(result)
    }
    else {
        res.send(users)
    }
})

app.get('/users/:id', (req, res) => {
    const userWithParameter = users.find(user => user.id === parseInt(req.params.id))
    res.send(userWithParameter)
})

app.post('/users', (req, res) => {
    const newUser = req.body
    newUser.id = users.length + 1;
    users.push(newUser)
    res.send(newUser)
})

app.listen(port, () => {
    console.log(`server is listening on port no ${port}`)
})