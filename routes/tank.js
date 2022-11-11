const router = require("express").Router();
const connection=require('../config/db');


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

router.get("/:hostel_id", (req, res) => {
    let sql = `SELECT * FROM tank WHERE hostel_id = ${req.params.hostel_id}`;
    connection.query(sql, (err, result) => {
        if (err) {
        res.sendStatus(500);
        } else {
        res.json(result);
        }
    });
});

router.get('/',(req,res)=>{
    let sql = `SELECT * FROM tank`;
    connection.query(sql, (err, result) => {
        if (err) {
        res.sendStatus(500);
        } else {
        res.json(result);
        }
    });
})

router.post('/', (req, res) => {
    let sql = `INSERT INTO tank (hostel_id,name,water_level) VALUES ('${req.body.hostel_id}', '${req.body.name}', '${req.body.water_level}')`;
    connection.query(sql, (err, result) => {
        if (err) {
        res.sendStatus(500);
        } else {
        res.sendStatus(200);
        }
    });
})

module.exports = router;
