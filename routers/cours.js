const express = require('express');
const router = express.Router();
const coursControlleur = require("../controllers/courscontrolleur");

router.get('/',coursConttrolleur.getcours,(req, res) => {
    res.send('product home page');
});
router.route('/add')
.get((req, res) => {
    res.send('ajouter un cours')
})
.post(coursControlleur.addCours, (req, res) => {

})


router.route('/:idcours')
.get(coursContrtolleur.getcourbyid, (req, res) => {
    res.send('cours page with id: ' + req.params.idcours);
})
.delete((req, res) => {
    res.send('delete cours with id: ' + req.params.idcours);
})
.put((req, res) => {
    res.send('update cours with id: ' + req.params.idcours);
});

module.exports = router;
