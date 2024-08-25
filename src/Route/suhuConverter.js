const express = require('express')
const app = express()

app.use(express.json())

const controller = require(`../controllers/suhuConverterControl`)

app.post("/celcius/:value", controller.celcius)
app.post("/reamure/:value", controller.reamure)
app.post("/kelvin/:value", controller.kelvin)
app.post("/fahrenheit/:value", controller.fahrenheit)

module.exports = app