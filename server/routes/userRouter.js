const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const grantAccess = require("../grantAccess/userAccess");
const allowIfLoggedin = require("../middlewares/allowIfLoggedIn");
const {defineUserRoles} = require("../roles/userRoles");

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/:userId', allowIfLoggedin, userController.getUser);
router.get('/', allowIfLoggedin, grantAccess(defineUserRoles,'readAny', 'profile'), userController.getUsers);
router.put('/:userId', allowIfLoggedin, grantAccess(defineUserRoles, 'updateAny', 'profile'), userController.updateUser);
router.delete('/user/:userId', allowIfLoggedin, grantAccess(defineUserRoles,'deleteAny', 'profile'), userController.deleteUser);

module.exports = router;