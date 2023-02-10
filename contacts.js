const path = require('path');
const fs = require('fs').promises;
const { v4: uuidv4 } = require('uuid');

const contactsPath = path.resolve('db/contacts.json');

async function readContacts() {
  const contactsList = await fs.readFile(contactsPath, 'utf8');
  const contactsListParse = JSON.parse(contactsList);
  return contactsListParse;
}

async function listContacts() {
  try {
    const contactsList = await readContacts();
    return contactsList;
  } catch (error) {
    console.log(error.message);
  }
}

async function getContactById(contactId) {
  try {
    const contactsList = await readContacts();
    const contactById = contactsList.filter(contact => contact.id === contactId);
    return contactById;
  } catch (error) {
    console.log(error.message);
  }
}

async function removeContact(contactId) {
  try {
    const contactsList = await readContacts();
    const newContactsList = contactsList.filter(contact => contact.id !== contactId);
    await fs.writeFile(contactsPath, JSON.stringify(newContactsList));
  } catch (error) {
    console.log(error.message);
  }
}

async function addContact(name, email, phone) {
  try {
    const contactsList = await readContacts();
    const contactNew = { id: uuidv4(), name, email, phone };
    const newContactsList = JSON.stringify([...contactsList, contactNew], null, '\t');

    await fs.writeFile(contactsPath, newContactsList);

    return newContactsList;
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
