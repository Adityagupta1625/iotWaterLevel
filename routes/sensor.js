const router = require("express").Router();


router.post("/", (req, res) => {
    
    console.log('mujhe request agayi');
    console.log(req.body);
});

module.exports = router;
