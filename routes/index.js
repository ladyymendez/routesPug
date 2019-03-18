var express = require('express');

var router = express.Router();
const users = [];
router.get('/', (req,res, next)=>{
    res.render('index');
});

router.post('/users', (req,res, next)=>{
    const {name} = req.body;
    console.log(name);
    users.push(name)
    res.redirect('/');
});



exports.routes = router;
exports.userlist= users;