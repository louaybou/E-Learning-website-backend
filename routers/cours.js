const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('product home page');
});

router.get('/:idcours', (req, res) => {
    const id = req.params.idcours; 
    res.send(`cours page with id: ${id}`);
});

module.exports = router;
