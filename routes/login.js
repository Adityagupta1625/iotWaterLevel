const router = require("express").Router();
const bcryptjs = require("bcryptjs");
const connection=require('../config/db');

router.post("/", (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  let sql = `SELECT * FROM user WHERE officialEmail='${email}'`;

  connection.query(sql, (err, result) => {
    if (err) {
      res.sendStatus(500);
    } 
    else {
      if (result.length > 0) {
        let user = result[0];
        let passwordIsValid = bcryptjs.compareSync(password, user.password);
        if (passwordIsValid) {
          res.sendStatus(200);
        } else {
          res.sendStatus(401);
        }
      } else {
        res.sendStatus(401);
      }
    }
  });

  connection.end();

  res.sendStatus(200);
});

module.exports = router;
