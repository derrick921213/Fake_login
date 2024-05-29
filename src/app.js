const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const path = __dirname + "/views/";
const port = 3000;

router.use(function (req, res, next) {
  console.log("/" + req.method);
  next();
});
router.post('/submit-your-login-form', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // 在这里处理接收到的电子邮件和密码
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);

  // 发送响应
  res.send('登录表单已提交');
});
router.get("/", function (req, res) {
  res.sendFile(path + "index.html");
});

router.get("/sharks", function (req, res) {
  res.sendFile(path + "sharks.html");
});

app.use(express.static(path));
app.use('/css', express.static(__dirname + '/views/css'));
app.use('/js', express.static(__dirname + '/views/js'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
