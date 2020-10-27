const {Router} = require('express')
const controllers = require('../controllers/index.js')
const router = Router()

router.get('/',controllers.index)

module.exports = router