var express = require('express');
var router = express.Router();

router.get('/',function(req, res, next){
    res.render('genres',{title:'single'})
})

module.exports = router;