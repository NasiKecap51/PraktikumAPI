const express = require('express')
const app = express()

app.use(express.json())

const controller = require(`../controllers/controllerBilangan`)

app.post("/decimal", controller.decimal)
app.post("/biner", controller.biner)
app.post("/octal", controller.octal)
app.post("/hexadecimal", controller.hexadecimal)

module.exports = app