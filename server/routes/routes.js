const { Router } = require('express')
const { signup_post, login_post} = require("../controllers/authController")
const { data, post_data } = require('../controllers/userData')

const router = Router()

router.post('/signup', signup_post)
router.post('/login', login_post)
router.post('/add', post_data)
router.post("/userdata", data)

module.exports = router