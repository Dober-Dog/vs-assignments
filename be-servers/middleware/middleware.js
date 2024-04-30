const addInfo = (req, res, next) => {
    req.body = "General Kenobi"
    next()
}



module.exports = addInfo