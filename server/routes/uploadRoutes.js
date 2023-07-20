const route = require("express").Router();
const upload = require("../middleware/upload");
const uploadImages = require("../middleware/uploadImages");
const auth = require("../middleware/auth");
const uploadController = require("../controllers/uploadController");

route.post(
  "/api/upload",
  uploadImages,
  upload,
  auth,
  uploadController.uploadAvar
);

module.exports = route;
