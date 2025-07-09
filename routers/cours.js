const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    res.send('product home page');
});

router.get('/:idproduct', (req, res) => {
    const id = req.params.idproduct;
    res.send(`product page with id: ${id}`);
});

module.exports = router;
