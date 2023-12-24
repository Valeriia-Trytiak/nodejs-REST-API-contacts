import Contact from "../models/Contacts.js";

import { HttpError } from "../helpers/index.js";
import { ctrlWrapper } from "../decorators/index.js";

const getAllContacts = async (req, res) => {
  const result = await Contact.find({}, "-createdAt -updatedAt");
  res.json(result);
};

// const getById = async (req, res, next) => {
//     const { contactId } = req.params;
//     const result = await contactsService.getContactById(contactId);
//     if (!result) {
//       throw HttpError(404);
//     }
//     res.json(result);
// };

// const removeContact = async (req, res, next) => {

//     const { contactId } = req.params;
//     const result = await contactsService.removeContact(contactId);
//     if (!result) {
//       throw HttpError(404);
//     }
//     res.json({ message: "contact deleted" });
// };

const addContact = async (req, res, next) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

// const updateContact = async (req, res, next) => {

//     const { error } = contactUpdateSchema.validate(req.body);
//     if (error) {
//       throw HttpError(400, error.message);
//     }
//     const { contactId } = req.params;
//     const result = await contactsService.updateContact(contactId, req.body);
//     if (!result) {
//       throw HttpError(404);
//     }
//     res.json(result);
// };

export default {
  getAllContacts: ctrlWrapper(getAllContacts),
  // getById: ctrlWrapper(getById),
  // removeContact: ctrlWrapper(removeContact),
  addContact: ctrlWrapper(addContact),
  // updateContact: ctrlWrapper(updateContact),
};
