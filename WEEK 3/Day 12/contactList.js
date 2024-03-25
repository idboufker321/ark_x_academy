const readline = require('readline');
const EventEmitter = require('events');

// Creating readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Collection to store contacts
const contacts = [];

// Create an event emitter instance
const eventEmitter = new EventEmitter();

// Function to add a contact
function addContact() {
    rl.question('Enter name: ', (name) => {
        rl.question('Enter phone number: ', (phoneNumber) => {
            const contact = { name, phoneNumber };
            contacts.push(contact);
            console.log('Contact added successfully!');
            eventEmitter.emit('contactAdded'); // Emit event when contact is added
        });
    });
}

// Function to view all contacts
function viewContacts() {
    if (contacts.length === 0) {
        console.log('No contacts available.');
    } else {
        console.log('All contacts:');
        contacts.forEach(contact => {
            console.log(`${contact.name}: ${contact.phoneNumber}`);
        });
    }
    eventEmitter.emit('viewContacts'); // Emit event when viewing contacts
}

// Function to search for a contact
function searchContact() {
    rl.question('Enter name to search: ', (name) => {
        const foundContact = contacts.find(contact => contact.name === name);
        if (foundContact) {
            console.log(`Contact found: ${foundContact.name}: ${foundContact.phoneNumber}`);
        } else {
            console.log('Contact not found.');
        }
        eventEmitter.emit('searchContact'); // Emit event after searching for a contact
    });
}

// Function to display the main menu
function mainMenu() {
    console.log('\nMain Menu:');
    console.log('1. Add a contact');
    console.log('2. View all contacts');
    console.log('3. Search for a contact');
    console.log('4. Exit');

    rl.question('Enter your choice: ', (choice) => {
        switch (Number(choice)) {
            case 1:
                addContact();
                break;
            case 2:
                viewContacts();
                break;
            case 3:
                searchContact();
                break;
            case 4:
                console.log('Exiting the application.');
                rl.close();
                break;
            default:
                console.log('Invalid choice. Please try again.');
                mainMenu();
                break;
        }
    });
}

// Event listeners
eventEmitter.on('contactAdded', mainMenu); // Listen for 'contactAdded' event and call mainMenu()
eventEmitter.on('viewContacts', mainMenu); // Listen for 'viewContacts' event and call mainMenu()
eventEmitter.on('searchContact', mainMenu); // Listen for 'searchContact' event and call mainMenu()

// Starting the application
console.log('Welcome to the Contact Manager!');
mainMenu();
