import contactsService from "../models/contacts/index.js";

import { HttpError } from "../helpers/index.js";

const listContacts = async (req, res, next) => {
  try {
    const result = await contactsService.listContacts();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const contactResult = await contactsService.getContactById(id);
    if (!contactResult) {
      throw HttpError(404);
    }
    res.json(contactResult);
  } catch (error) {
    next(error);
  }
};

export default { listContacts, getById };
