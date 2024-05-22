
require('dotenv').config()


const express = require('express')
const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/system',(req, res) => {
    res.send("<h2> plese login the youtube</h2>")
})
app.get('/twitter',(req, res) => {
    res.send("shivam code")
})
app.get('/youtube',(req, res) => {
  res.send("<h1>   login</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})