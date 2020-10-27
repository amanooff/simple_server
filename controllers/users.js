module.exports.create = function (req, res) {

}

module.exports.getAll = function (req, res) {
    const users = ['alex', 'max', 'bob', 'william', 'Jessica', 'Alison', 'Joanna', 'Julia']
    res.status(200).json(users)
}

module.exports.update = function (req, res) {

}

module.exports.delete = function (req, res) {

}