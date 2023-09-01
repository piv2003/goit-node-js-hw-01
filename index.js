const { Command } = require("commander");
const program = new Command();
const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);

    case "get":
      const oneContact = await contacts.getContactById(id);
      return console.table(oneContact);

    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      return console.table(newContact);

    case "remove":
      const deleteById = await contacts.removeContact(id);
      return console.table(deleteById);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
