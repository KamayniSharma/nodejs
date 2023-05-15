const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/', (req, res, next) => {
    console.log("In the middleware");
    res.sendFile(path.join(__dirname, '../','views', 'shop.html'))
        //allows request to continue to next middleware
});

module.exports = router;