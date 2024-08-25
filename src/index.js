const express = require("express"); 
// const bodyParser = require("body-parser"); 
const cors = require("cors"); 
const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const praktikum = require(`./Route/praktikumRoute`)
app.use(`/praktikum`, praktikum)

const bangunRuangRoute = require(`./routes/bangunRuang`);
app.use(`/bangun-ruang`, bangunRuangRoute);

const bilangan = require('./routes/bilangan')
app.use('/bilangan', bilangan)

const convertRoute = require(`./routes/suhuConverter`);
app.use(`/convert`, convertRoute);

const bmi = require('./routes/bmi')
app.use('/bmi', bmi)



app.get("/test", (req, res) => {
  let response = {
    message: "Ini end-point pertama ku",
    method: req.method,
    code: res.statusCode,
  };
  res.json(response);
});

app.listen(4000, () => {
  console.log("Server run on port 4000");
});