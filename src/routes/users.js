const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const validation = require("./validation");

router.get("/users/sign_up", userController.signUp);
router.get("/users/sign_in", userController.signInForm);
router.get("/users/sign_out", userController.signOut);
router.get('/users/google', userController.googleSignInMethodOne);
router.get('/users/google/callback', userController.googleSignInMethodTwo);
router.get('/users/facebook', userController.facebookSignInMethodOne);
router.get('/users/facebook/callback', userController.facebookSignInMethodTwo);
router.post("/users", validation.validateUsers, userController.create);
router.post("/users/sign_in", userController.signIn);

module.exports = router;