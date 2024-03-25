// app.js
const { addUser, authenticateUser } = require('./authentication');
const readline = require('readline-sync');
const { eventEmitter, checkBalance, depositMoney, withdrawMoney, viewTransactions } = require('./operations');

const showMenu = (user) => {
  console.log('\n1. Check Balance');
  console.log('2. Deposit Money');
  console.log('3. Withdraw Money');
  console.log('4. View Transaction History');
  console.log('5. Exit');

  const choice = readline.question('Enter your choice: ');

  switch (choice) {
    case '1':
      checkBalance(user);
      break;
    case '2':
      const depositAmount = parseFloat(readline.question('Enter the deposit amount: $'));
      depositMoney(user, depositAmount);
      break;
    case '3':
      const withdrawAmount = parseFloat(readline.question('Enter the withdrawal amount: $'));
      withdrawMoney(user, withdrawAmount);
      break;
    case '4':
      viewTransactions(user);
      break; 
    case '5':
      console.log('Exiting. Goodbye!');
      process.exit(0);
      break;
    default:
      console.log('Invalid choice. Please try again.');
  }

  showMenu(user);
};

const main = () => {
  console.log('Welcome to the ATM Management System');

  const accountID = readline.('Enter your Account ID: ');
  const pin = readline.question('Enter your 4-digit PIN: ');

  const user = authenticateUser(accountID, pin);

  if (user) {
    console.log(`Welcome back, ${user.name}!`);
    eventEmitter.on('deposit', () => console.log('Event: Deposit occurred.'));
    eventEmitter.on('withdraw', () => console.log('Event: Withdrawal occurred.'));
    showMenu(user);
  } else {
    console.log('Invalid credentials. Creating a new account.');
    const newUser = addUser(accountID, pin);
    console.log(`Account created successfully. Your Account ID is: ${newUser.accountID}`);
    main(); // Retry login
  }
};

main();
