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

async function deleteCour(req, res) {
    const { id } = req.params;
    try {
        const cour = await Cour.findByPk(id); 
        if (!cour) {
            return res.status(404).send("Course not found");
        }

        await cour.destroy();
        res.status(200).send("Course deleted successfully");
    } catch (error) {
        console.error("Error deleting course:", error)
        res.status(500).send("Error deleting course")}}
async function updatecour(req, res){
    const id = req.params.idcours
    const {name ,description, price, image} = req.body
    try{
        const cour = await cours.findByPk(id)
        if (!cour) {
            return res.status(404).send("Course not found")
        }
        cour.name = name
        cour.desccription = description 
        cour.price = price
        cour.image = image
        await cour.saves()
        res.status(200).send("Course updated successfully")
    }
    catch (error) {
        console.error("Error updating course:", error)
}}
    
module.exports = {addCours, getCours, getcourbyid, deleteCour, updatecour}