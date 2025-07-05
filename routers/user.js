const express = require('express');
const router = express.Router();
const userverify = require('../middleware/userverify')
const registerverify = require('../middleware/registerverify')
router.use(express.json());
const User = require('../models/user');
const adminrole = require('../middleware/role')
const bcrypt = require('bcrypt')
router.route('/register')
    .get((req,res) => {
        res.render('register')
    })
    .post(registerverify,async(req, res) => {
        const { nom, prenom, email, password } = req.body;
        try {
            const hashedPassword = await bcrypt.hash(password, 10)
            const newUser = await User.create({ nom, prenom, email,password: hashedPassword, role: 'user' });
            res.status(201).json({ message: 'Utilisateur créé avec succès', user: newUser });
        }
        catch(error) {
            console.error('Erreur création utilisateur:', error)
            res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' })
        }
    })
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
