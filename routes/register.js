const router = require("express").Router();
const bcryptjs = require("bcryptjs");
const connection=require('../config/db');
 

router.post("/", (req, res) => {
  let name = req.body.name;
  let officalEmail = req.body.officalEmail;
  let personalEmail = req.body.personalEmail;
  let password = req.body.password;
  let mobileNo = req.body.mobileNo;
  let id=req.body.id;
  let category=req.body.category;
  let image=req.body.image;  

  password = bcryptjs.hashSync(password, 10);

  let sql = `INSERT INTO user(name,officialEmail,personalEmail,password,mobileNo,id,category,image) VALUES ('${name}','${officalEmail}','${personalEmail}','${password}','${mobileNo}','${id}','${category}','${image}')`;

  connection.query(sql);
  connection.end();

  res.sendStatus(200);
});

module.exports = router;
