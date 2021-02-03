const fs = require("fs");
const path = require("path");

module.exports = {
  devServer: {
    https: {
      key: fs.readFileSync(path.join(__dirname, "./cert/localhost+1-key.pem")),
      cert: fs.readFileSync(path.join(__dirname, "./cert/localhost+1.pem")),
    },
  },
};
