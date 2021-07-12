const { Router } = require('express')
const router = Router()

router.route('/')
    .get((req, res) => res.send('Notes users'))

module.exports = router;