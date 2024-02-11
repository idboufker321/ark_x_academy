// operations.js
const { EventEmitter } = require('events');
const { getUsers, saveUsers } = require('./authentication');

const eventEmitter = new EventEmitter();

const checkBalance = (user) => {
  console.log(`Current Balance for ${user.name}: $${user.balance}`);
};

const depositMoney = (user, amount) => {
  user.balance += amount;
  user.transactions.push({ type: 'deposit', amount, date: new Date().toISOString().split('T')[0] });
  saveUsers(getUsers());
  console.log(`Deposited $${amount} into ${user.name}'s account. Current Balance: $${user.balance}`);
  eventEmitter.emit('deposit', user);
};

const withdrawMoney = (user, amount) => {
  if (user.balance >= amount) {
    user.balance -= amount;
    user.transactions.push({ type: 'withdraw', amount, date: new Date().toISOString().split('T')[0] });
    saveUsers(getUsers());
    console.log(`Withdrawn $${amount} from ${user.name}'s account. Current Balance: $${user.balance}`);
    eventEmitter.emit('withdraw', user);
  } else {
    console.log(`${user.name} has insufficient funds.`);
  }
};

const viewTransactions = (user) => {
  console.log(`${user.name}'s Transaction History:`);
  user.transactions.forEach(transaction => {
    console.log(`${transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)} of $${transaction.amount} on ${transaction.date}`);
  });
};

module.exports = { eventEmitter, checkBalance, depositMoney, withdrawMoney, viewTransactions };
