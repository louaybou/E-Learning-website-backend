const express = require('express');
const router = express.Router();
router.use(express.json());
const userverify = require('../middleware/userverify')
const registerverify = require('../middleware/registerverify')
const userController = require('../controllers/userController')
router.route('/register')
    .get((req,res) => {
        res.render('register')
    })
    .post(registerverify, userController.registercontroller)
router.route('/login')
    .get((req,res) => {
        //res.render('login')
        res.send('Page de connexion')
    })
    .post(userverify,userController.logincontroller, (req,res) => {
        res.send('le compte a été connecter')
        const role = req.user.role;
        if (role === 'admin') {
            const idadmin = req.user.id;
            return res.redirect(`/admin/${idadmin}`);
        }
        const iduser = req.user.id;
        res.redirect(`/user/${iduser}`);
    })


router.route('/user/:iduser')
    .get((req, res) => {
        const id = req.params.iduser;
        res.send(`Page utilisateur avec l'ID : ${id}`);
    })

module.exports = router
