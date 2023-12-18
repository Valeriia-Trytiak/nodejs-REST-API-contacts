import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const contactsPath = path.resolve("models", "contacts", "contacts.json");
const updateListContacts = (allContacts) => fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const allContacts = await listContacts();
  const contactResult = allContacts.find((item) => item.id === contactId);
  return contactResult || null;
};

const removeContact = async (contactId) => {
  const allContacts = await listContacts();
  const index = allContacts.findIndex((item) => item.id === contactId);
  if (index === -1) {
    return null;
  }

  const [newListContacts] = allContacts.splice(index, 1);
  await updateListContacts(allContacts);
  return newListContacts;
};

const addContact = async (body) => {
  const allContacts = await listContacts();
  const newContact = {
    id: nanoid(),
    ...body,
  };
  allContacts.push(newContact);
  await updateListContacts(allContacts);
  return newContact;
};

const updateContact = async (contactId, body) => {
  const allContacts = await listContacts();
  const index = allContacts.findIndex((item) => item.id === contactId);
  if (index === -1) {
    return null;
  }
  allContacts[index] = { ...allContacts[index], ...body };
  await updateListContacts(allContacts);
  return allContacts[index];
};

export default {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
