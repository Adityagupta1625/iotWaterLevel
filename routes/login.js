const router = require("express").Router();
const bcryptjs = require("bcryptjs");
const connection = require("../config/db");

router.post("/", async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  let sql = `SELECT * FROM user WHERE officialEmail='${email}'`;

  connection.query(sql, async (err, result) => {
    if (err){
      console.log(err);
      res.status(500).send({ message: "Internal Server Error" });
    }
    if (result.length > 0) {
      let match = await bcryptjs.compare(password, result[0].password);
      if (match) {
        res.send({ message: "Login Successful", data: result[0] });
      } else {
        res.send({ message: "Incorrect Password" });
      }
    } else {
      res.send({ message: "User not found" });
    }
  });

  connection.end();
});

module.exports = router;
