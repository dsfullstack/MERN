const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../Controlers/contactController");
router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);



//router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
