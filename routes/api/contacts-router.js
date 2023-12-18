import express from "express";
import contactsController from "../../controllers/contacts-controller.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsController.getAllContacts);

contactsRouter.get("/:contactId", contactsController.getById);

contactsRouter.post("/", contactsController.addContact);

contactsRouter.delete("/:contactId", contactsController.removeContact);

contactsRouter.put("/:contactId", contactsController.updateContact);

export default contactsRouter;
