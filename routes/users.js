const { Router } = require('express')
const controllers = require('../controllers/users')
const router = Router()

router.post('/add', controllers.create)
router.get('/', controllers.getAll)
router.patch('/edit:id', controllers.update)
router.delete('/delete/:id', controllers.delete)

module.exports = router