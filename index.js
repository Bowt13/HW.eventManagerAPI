const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 4001
const eventsRouter = require('./router/router')

var Sequelize = require('sequelize')
var sequelize = new Sequelize(
  'postgres://postgres:secret@localhost:5432/postgres')

app.listen(port, () => console.log(
  `Express API listening on port ${port}`))

  
  app.use(bodyParser.json())
  app.use(eventsRouter)
