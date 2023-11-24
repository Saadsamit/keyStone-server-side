const createAuthCookie = require("../../../api/v1/auth/createAuthCookie");
const logout = require("../../../api/v1/auth/logout");

const router = require("express").Router();

router.post('/jwt',createAuthCookie)
router.post('/logout',logout)

module.exports = router