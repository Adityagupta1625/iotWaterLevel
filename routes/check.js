const router = require("express").Router();
const connection=require('../config/db');
  

router.get("/:id", (req, res) => {
    let sql = `SELECT * FROM check WHERE id = ${req.params.id}`;
    connection.query(sql, (err, result) => {
        if (err) {
        res.sendStatus(500);
        } else {
        res.json(result);
        }
    });
});

module.exports = router;
