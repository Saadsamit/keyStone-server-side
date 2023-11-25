const createAuthCookie = require("../../api/v1/auth/createAuthCookie");
const logout = require("../../api/v1/auth/logout");

const router = require("express").Router();

router.post('/api/v1/jwt',createAuthCookie)
router.post('/api/v1/logout',logout)

module.exports = router