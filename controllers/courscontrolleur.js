const cours = require('../modules/cours')
const express = require('express')

async function addCours(req, res) {
    const { name, description, price, image } = req.body
    try {
        const newcours =await cours.create({name, description, price, image})  
        }
    catch (error) {
        res.status(401).send("eurreur lors de l'ajout du cours")
    }
    res.status(201).send('cours added successfully')}
async function getCours(req, res) {
    try {
        const allcours = await cours.findAll()
        res.status(200).json(allcours)
    }
    catch (error) {
        res.status(500).send("Error retrieving courses")
    }}
async function getcourbyid(req, res) {
    const id = req.params.idcours
    try {
        const courbyid = await cours.findbyPk(id)
        if (!courbyid){
            return res.statu(404).send("cour not found")
        }
        else {
            res.status(200).json(courbyid)
    }
}
catch (error) {
    res.status(500).send("Error retrieving course by ID")
    }}
module.exports = coursController