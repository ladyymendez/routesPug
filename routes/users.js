var express = require('express');

var router = express.Router();

var users = require('./index');

router.get('/users', (req, res, next)=>{
    console.log('users',users.userlist);
    res.render('users', {users: users.userlist});
});

exports.routes = router;