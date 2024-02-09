const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let contacts = [];

function mainMenu() {
  console.log("\n📇 Main Menu 📇");
  console.log("1️⃣ Add a contact");
  console.log("2️⃣ View all contacts");
  console.log("3️⃣ Search for a contact");
  console.log("4️⃣ Exit");
  rl.question("\nEnter your choice (1-4): ", (choice) => {
    switch (choice) {
      case "1":
        {
          readline.cursorTo(process.stdout, 0, 0);
          readline.clearScreenDown(process.stdout);
          addContact();
        }
        break;
      case "2":
        {
          readline.cursorTo(process.stdout, 0, 0);
          readline.clearScreenDown(process.stdout);
          viewContacts();
        }
        break;
      case "3":
        {
          readline.cursorTo(process.stdout, 0, 0);
          readline.clearScreenDown(process.stdout);
          searchContact();
        }
        break;
      case "4":
        console.log("Exiting the System. see you :)");
        rl.close();
        break;
      default: {
        readline.cursorTo(process.stdout, 0, 0);
        readline.clearScreenDown(process.stdout);
        console.log(
          "\nInvalid choice. please choose a number between 1 and 4."
        );
        mainMenu();
      }
    }
  });
}
mainMenu();
function addContact() {
  rl.question("Enter the name: ", (name) => {
    rl.question("Enter the phone number: ", (phoneNumber) => {
      contacts.push({ name, phoneNumber });
      console.log("Contact added successfully!");
      setTimeout(() => {
        readline.cursorTo(process.stdout, 0, 0);
        readline.clearScreenDown(process.stdout);
        mainMenu();
      }, 1500);
    });
  });
}

function viewContacts() {
  if (contacts.length === 0) {
    console.log("No contacts found.");
  } else {
    console.log("All contacts:");
    contacts.forEach((contact) => {
      console.log(`Name: ${contact.name}, Phone: ${contact.phoneNumber}`);
    });
  }
  setTimeout(() => {
    readline.cursorTo(process.stdout, 0, 0);
    readline.clearScreenDown(process.stdout);
    mainMenu();
  }, 1500);
}

function searchContact() {
  rl.question("Enter the name to search: ", (name) => {
    const contact = contacts.filter((contact) => contact.name === name);
    if (contact) {
      console.log(contact);
    } else {
      console.log("Contact not found.");
    }

    setTimeout(() => {
      readline.cursorTo(process.stdout, 0, 0);
      readline.clearScreenDown(process.stdout);
      mainMenu();
    }, 1500);
  });
}