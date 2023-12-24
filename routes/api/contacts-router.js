import express from "express";
import contactsController from "../../controllers/contacts-controller.js";
import { contactAddSchema, contactUpdateSchema } from "../../models/Contacts.js";

import { isEmplyBody } from "../../middlewares/index.js";
import validateBody from "../../decorators/validateBody.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsController.getAllContacts);

// contactsRouter.get("/:contactId", contactsController.getById);

contactsRouter.post("/", isEmplyBody, validateBody(contactAddSchema), contactsController.addContact);

// contactsRouter.delete("/:contactId", validateBody(contactUpdateSchema), contactsController.removeContact);

// contactsRouter.put("/:contactId", isEmplyBody, contactsController.updateContact);

export default contactsRouter;
