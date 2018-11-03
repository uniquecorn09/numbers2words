const Converter = require("./converter")
const initRoutes = app => {
  app.post("/convert", invokeConverter);
};

const invokeConverter = (req, res) => {
  let number2Convert = req.body.number;
  let response = Converter.convert(number2Convert);
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify({response:response}));
  };

module.exports = {
    init: initRoutes
  };