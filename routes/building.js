const router = require("express").Router();
const connection=require('../config/db');
  

router.get("/:id", (req, res) => {
    let sql = `SELECT * FROM building WHERE id = ${req.params.id}`;
    connection.query(sql, (err, result) => {
        if (err) {
        res.sendStatus(500);
        } else {
        res.json(result);
        }
    });
});

router.get("/:college", (req, res) => {
    let sql = `SELECT * FROM building WHERE college_name = ${req.params.college}`;
    connection.query(sql, (err, result) => {
        if (err) {
        res.sendStatus(500);
        } else {
        res.json(result);
        }
    });
});

router.get("/:type", (req, res) => {
    let sql = `SELECT * FROM building WHERE college_name = ${req.params.type}`;
    connection.query(sql, (err, result) => {
        if (err) {
        res.sendStatus(500);
        } else {
        res.json(result);
        }
    });
});

router.get('/',(req,res)=>{
    let sql = `SELECT * FROM building`;
    connection.query(sql, (err, result) => {
        if (err) {
        res.sendStatus(500);
        } else {
        res.json(result);
        }
    });
})

router.post('/', (req, res) => {
    let sql = `INSERT INTO building (name, college_name, type) VALUES ('${req.body.name}', '${req.body.college_name}', '${req.body.type}')`;
    connection.query(sql, (err, result) => {
        if (err) {
        res.sendStatus(500);
        } else {
        res.sendStatus(200);
        }
    });
})

module.exports = router;
