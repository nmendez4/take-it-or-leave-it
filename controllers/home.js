const path = require("path");

const home = (req, res) => {
  return res.sendFile(path.join(__dirname, '/views/homepage.handlebars'));
};

module.exports = {
 home
};
