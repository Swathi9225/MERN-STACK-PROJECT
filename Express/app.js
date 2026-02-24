const express = require('express')
// import express from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/sir', (req, res) => {
  res.send("<h1>Hello sir Please don't scary me!!</h1>")
})

app.get('/videos', (req, res) => {
  res.send('video page!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
