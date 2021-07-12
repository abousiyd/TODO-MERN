const { Router } = require('express')
const router = Router()

router.route('/')
    .get((req, res) => res.send('users Notes'))

module.exports = router;