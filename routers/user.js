const express = require('express');
const router = express.Router();
const userverify = require('../middleware/userverify')
const { check } = require('express-validator');
const registerverify = require('../middleware/registerverify')


router.route('/register')
    .get((req,res) => {
        res.render('register')
    })
    .post(
    [
        check('email').isEmail().withMessage('Email non valide'),
        check('password').isLength({ min: 6 }).withMessage('Le mot de passe doit contenir au moins 6 caractères')
    ],
    registerverify,
    (req, res) => {
        res.send('Le compte a été enregistré');
    }
)
router.route('/login')
    .get((req,res) => {
        res.render('login')
    })
    .post(userverify, (req,res) => {
        res.send('le compte a été connecter')
    })


router.route('/:iduser',)

module.exports = router;
