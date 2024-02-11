// authentication.js
const fs = require('fs');

const getUsers = () => {
  const usersData = fs.readFileSync('users.json');
  return JSON.parse(usersData);
};

const saveUsers = (users) => {
  fs.writeFileSync('users.json', JSON.stringify(users, null, 2));
};

const addUser = (name, pin) => {
  const users = getUsers();
  const accountID = 'ACC' + (users.length + 1).toString().padStart(4, '0');
  const newUser = {
    accountID,
    name,
    pin,
    balance: 0,
    transactions: []
  };
  users.push(newUser);
  saveUsers(users);
  return newUser;
};

const authenticateUser = (accountID, pin) => {
  const users = getUsers();
  return users.find(user => user.accountID === accountID && user.pin === pin);
};

module.exports = { addUser, authenticateUser, getUsers, saveUsers };
