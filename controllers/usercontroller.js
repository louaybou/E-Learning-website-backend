const express = require('express')
express.use(express.json())
const User = require('../models/user')
const bycrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

async function registercontroller(req , res) {
    const {nom, premon, email, password} = req.body;
    try {
        const hashedPassword =await bycrypt.hash(password, 10)
        const user = await User.create({
            nom,
            premon,
            email,
            password: hashedPassword
        })
        res.status(201).json({
            message: 'User created successfully'

    })}
    catch (error) {
        console.error('Error creating user:', error);
}
}
async function logincontroller(req, res) {
    const { email, password} = req.body
    try {
        const user = await User.findOne({where: {email}})
        if (!user) {
            return res.status(404).json({message: 'User not found'})
        }
        const ispasswordvalid = await bycrypt.compare(password, user.password)
            if (!ispasswordvalid) {
                return res.status(401).json({message: 'Invalid password'})
            }
            res.status(200).json({ message: 'Login successful' });
            const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' })
        } catch (error) {
            res.status(500).json({message: 'Internal server error' });
        }
    }
module.exports = {
    registercontroller,logincontroller}