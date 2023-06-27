const { Router } = require('express')
const { signup_post, login_post} = require("../controllers/authController")
const { data, profile } = require('../controllers/userData')

const router = Router()

router.post('/signup', signup_post)
router.post('/login', login_post)
router.get("/profile", profile)
router.post("/userdata", data)

module.exports = router