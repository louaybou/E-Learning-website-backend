
function registerverify(req, res, next) {
    if (!req.body) {
        return res.status(400).json({ error: 'Aucune donnée reçue' });
    }
    const {email, password} = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'Email et mot de passe sont requis' });
    }if (password.length < 6) {
        return res.status(400).json({ error: 'Le mot de passe doit contenir au moins 6 caractères' });
    }if (!email.includes('@')) {
        return res.status(400).json({ error: 'Email non valide' }); 
}next();
}

module.exports = registerverify;