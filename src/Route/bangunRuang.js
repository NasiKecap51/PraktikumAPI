const express = require('express')
const app = express()

app.use(express.json())

const controller = require(`../controllers/controllerBangunRuang`)

app.post("/kubus", controller.kubus)
app.post("/balok", controller.balok)
app.post("/bola", controller.bola)
app.post("/tabung", controller.tabung)

module.exports = app