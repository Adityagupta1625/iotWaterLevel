const router = require("express").Router();
const connection = require("../config/db");

router.get("/:id", (req, res) => {
  let sql = `SELECT * FROM tank WHERE id = ${req.params.id}`;
  connection.query(sql, (err, result) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(result);
    }
  });
});

router.get("/:building_id", (req, res) => {
  let sql = `SELECT * FROM tank WHERE building_id = ${req.params.building_id}`;
  connection.query(sql, (err, result) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(result);
    }
  });
});

router.get("/", (req, res) => {
  let sql = `SELECT * FROM tank`;
  connection.query(sql, (err, result) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(result);
    }
  });
});

router.post("/", (req, res) => {
  console.log(req.body);
  let sql = `INSERT INTO tank (building_id,name,water_level) VALUES (${req.body.building_id}, '${req.body.name}', ${req.body.water_level})`;
  connection.query(sql, (err, result) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
