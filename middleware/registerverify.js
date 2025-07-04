const { validationResult } = require('express-validator');

function registerverify(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(401).json({ errors: errors.array() });
    }
    next();
}

module.exports = registerverify;