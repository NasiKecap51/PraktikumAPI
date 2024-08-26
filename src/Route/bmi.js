const express = require('express')
const app = express()

app.use(express.json())

const controller = require(`../Controller/bmiController`)

app.post("/", controller.bmi)

module.exports = app