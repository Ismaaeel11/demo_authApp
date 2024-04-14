var express = require('express')
var router = express.Router()

router.get('/', (req, res) =>{
    console.log(req.oidc.isAuthenticated());
    console.log(req.oidc.user);
   // res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
    res.render('index', { title: "Express",
     isAuthenticated: req.oidc.isAuthenticated(),
     user: req.oidc.user,
    });
});

module.exports = router;
