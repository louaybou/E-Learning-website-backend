function adminrole(req ,res, next) {
    if (req.User && req.user.role === 'admin') {
        next();
    }
}
module.exports = adminrole;
