require('dotenv').config()//loads .env file and adds variables to process.env
const express = require('express')//loads express lib 
//import express from 'express'
const app = express()//creates server object
Math.random()
const port = 3000//sets port number

app.get('/', (req, res) => {
  res.send('Hello World!')
})//app.get	When user visits a page
// '/'	Homepage URL
// (req, res)	request & response objects
// res.send()	What server sends back
app.get('/twitter', (req, res) => {
    res.send('sparshdotcom')
})
app.get('/login', (req, res) => {
    res.send('<h1>login page</h1>')
})
app.get('/random', (req, res) => {
    res.send(Math.random().toString())
})
app.listen(process.env.PORTf, () => {
  console.log(`Example app listening on port ${port}`)
})
