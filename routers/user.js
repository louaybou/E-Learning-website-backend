const express = require('express');
const router = express.Router();
const userverify = require('../middleware/userverify')
const registerverify = require('../middleware/registerverify')
router.use(express.json());

router.route('/register')
    .get((req,res) => {
        res.render('register')
    })
    .post(registerverify,(req, res) => {
        res.send('Le compte a été enregistré');
    }
)
router.route('/login')
    .get((req,res) => {
        //res.render('login')
        res.send('Page de connexion')
    })
    .post(userverify, (req,res) => {
        res.send('le compte a été connecter')
    })


router.route('/:iduser',)

module.exports = router
