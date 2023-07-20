const express = require("express");
const route = express.Router();
const userController = require("../controllers/userController");
const middleWare = require("../middleware/auth");

route.post("/api/auth/register", userController.register);
route.post("/api/auth/activation", userController.activate);
route.post("/api/auth/signing", userController.signing);
route.post("/api/auth/access", userController.access);
route.post("/api/auth/forgot_pass", userController.forgot);
route.post("/api/auth/reset_pass", middleWare, userController.reset);
route.get("/api/auth/user", middleWare, userController.info);
route.patch("/api/auth/user_update", middleWare, userController.update);
route.get("/api/auth/signout", userController.signout);
route.post("/api/auth/google_signing", userController.google);

module.exports = route;
