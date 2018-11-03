const Converter = require("./converter")
const initRoutes = app => {
  app.post("/convert", invokeConverter);
};

const invokeConverter = (req, res) => {
  console.log(req.body);
  console.log(Converter)
  let number2Convert = req.body.number;

  let response = Converter.convert(number2Convert);

  
  res.send(response);
  };


require("dotenv").config();

module.exports = {
    init: initRoutes
  };