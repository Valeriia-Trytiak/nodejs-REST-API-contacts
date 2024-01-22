import express from "express";
import contactsController from "../../controllers/contacts-controller.js";

import { isEmplyBody } from "../../middlewares/index.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsController.getAllContacts);

contactsRouter.get("/:contactId", contactsController.getById);

contactsRouter.post("/", contactsController.addContact);

contactsRouter.delete("/:contactId", contactsController.removeContact);

contactsRouter.put("/:contactId", isEmplyBody, contactsController.updateContact);

export default contactsRouter;
