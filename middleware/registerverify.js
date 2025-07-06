function registerverify(req, res, next) {
    const { nom, prenom, email, password } = req.body;
    if (!nom || !prenom || !email || !password) {
        return res.status(400).json({ error: 'Tous les champs sont requis' });
    }
    if (password.length < 6) {
        return res.status(400).json({ error: 'Le mot de passe doit contenir au moins 6 caractères' });
    }
    if (!email.includes('@')) {
        return res.status(400).json({ error: 'Email non valide' })
    }
    next()
}

module.exports = registerverify