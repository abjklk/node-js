const express = require('express');

const router = express.Router();

router.get('/:dishId',(req,res)=>{
    res.send("hello "+req.params.dishId);
});

module.exports = router;