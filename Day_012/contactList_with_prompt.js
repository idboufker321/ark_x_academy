const readline = require('readline');
const EventEmitter = require('events');

// Création de l'interface readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Collection pour stocker les contacts
const contacts = [];

// Création d'une instance de EventEmitter
const eventEmitter = new EventEmitter();

// Fonction pour demander une saisie à l'utilisateur
function prompt(question) {
    return new Promise((resolve, reject) => {
        rl.question(question, (userInput) => {
            resolve(userInput);
        });
    });
}

// Fonction pour ajouter un contact
async function addContact() {
    const name = await prompt('Entrez le nom : ');
    const phone = await prompt('Entrez le numéro de téléphone : ');
    contacts.push({ name, phone });
    console.log('Contact ajouté avec succès !\n');
    eventEmitter.emit('contactAdded', name, phone);
}

// Fonction pour afficher tous les contacts
function viewContacts() {
    console.log('\nContacts:');
    if (contacts.length === 0) {
        console.log('Aucun contact disponible.\n');
    } else {
        contacts.forEach((contact, index) => {
            console.log(`Nom: ${contact.name}, Numéro de téléphone: ${contact.phone}`);
        });
        console.log('');
    }
    mainMenu();
}

// Fonction pour rechercher un contact
async function searchContact() {
    const name = await prompt('Entrez le nom à rechercher : ');
    eventEmitter.emit('searchContact', name);
}

// Fonction pour afficher le menu principal
function mainMenu() {
    console.log('\nMenu Principal:');
    console.log('1. Ajouter un contact');
    console.log('2. Afficher tous les contacts');
    console.log('3. Rechercher un contact');
    console.log('4. Quitter');

    rl.question('Entrez votre choix : ', (choice) => {
        switch (choice) {
            case '1':
                addContact();
                break;
            case '2':
                viewContacts();
                break;
            case '3':
                searchContact();
                break;
            case '4':
                console.log('Fermeture de l\'application.');
                rl.close();
                break;
            default:
                console.log('Choix invalide. Veuillez réessayer.');
                mainMenu();
                break;
        }
    });
}

// Gestionnaire d'événements pour l'ajout de contact
eventEmitter.on('contactAdded', mainMenu);

// Gestionnaire d'événements pour la recherche de contact
eventEmitter.on('searchContact', (name) => {
    const foundContact = contacts.find(contact => contact.name === name);
    if (foundContact) {
        console.log(`Contact trouvé : Nom: ${foundContact.name}, Numéro de téléphone: ${foundContact.phone}`);
    } else {
        console.log('Contact non trouvé.');
    }
    mainMenu();
});

// Démarrage de l'application
console.log('Bienvenue dans le gestionnaire de contacts !');
mainMenu();
