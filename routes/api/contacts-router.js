import express from "express";
import contactsController from "../../controllers/contacts-controller.js";
import { contactAddSchema, contactUpdateFavoriteSchema, contactUpdateSchema } from "../../models/Contacts.js";

import { isEmplyBody, isValidId, userenticate, upload } from "../../middlewares/index.js";
import validateBody from "../../decorators/validateBody.js";

const contactsRouter = express.Router();

contactsRouter.use(userenticate);

contactsRouter.get("/", contactsController.getAllContacts);

contactsRouter.get("/:contactId", isValidId, contactsController.getById);

contactsRouter.post(
  "/",
  upload.single("avatar"),
  isEmplyBody("missing fields"),
  validateBody(contactAddSchema),
  contactsController.addContact
);

contactsRouter.delete("/:contactId", isValidId, contactsController.removeContact);

contactsRouter.put(
  "/:contactId",
  isValidId,
  isEmplyBody("missing fields"),
  validateBody(contactUpdateSchema),
  contactsController.updateContact
);
contactsRouter.patch(
  "/:contactId/favorite",
  isValidId,
  isEmplyBody("missing field favorite"),
  validateBody(contactUpdateFavoriteSchema),
  contactsController.updateStatusContact
);
export default contactsRouter;
