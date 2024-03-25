const mongoose = require('mongoose');

// Connection
mongoose.connect("mongodb://localhost:27017/mydb")
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log("Error: ", error));

// Define a Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number },
  createdAt: { type: Date, default: Date.now },
});

// Create a Model
const User = mongoose.model('User', userSchema);

// Use the Model

// Create a new User
const newUser = new User({
  name: "Mike Ross",
  email: "mike.ross@arkx.group",
  age: 30,
});

newUser
  .save()
  .then((user) => console.log("User created successfully: ", user))
  .catch((error) => console.log("Error creating user: ", error));

// Fetching users
function fetchUsers() {
  User.find({})
    .then((users) => console.log("All Users:", users))
    .catch((error) => console.log("Error fetching users: ", error));
}

// Fetching a single user by name
function fetchUserByName(name) {
  User.findOne({ name })
    .then((user) => {
      if (user) console.log("User found by name:", user);
      else console.log("User not found");
    })
    .catch((error) => console.log("Error fetching user: ", error));
}

// Fetching a single user by email
function fetchUserByEmail(email) {
  User.findOne({ email })
    .then((user) => {
      if (user) console.log("User found by email:", user);
      else console.log("User not found");
    })
    .catch((error) => console.log("Error fetching user: ", error));
}

// Update user email by name
function updateUserEmailByName(name, newEmail) {
  User.findOneAndUpdate(
    { name },
    { $set: { email: newEmail } },
    { new: true }
  )
    .then((user) => {
      if (user) console.log("User email updated successfully:", user);
      else console.log("User not found");
    })
    .catch((error) => console.log("Error updating user email: ", error));
}

// Delete users created before a specific date (e.g., one week ago)
function deleteUsersBeforeDate(date) {
  User.deleteMany({ createdAt: { $lt: date } })
    .then((result) => {
      console.log(`Number of deleted users: ${result.deletedCount}`);
    })
    .catch((error) => console.log("Error deleting users: ", error));
}

// Fetch users
fetchUsers();

// Fetch user by name
fetchUserByName("Mike Ross");

// Fetch user by email
fetchUserByEmail("mike.ross@arkx.group");

// Update user email by name
updateUserEmailByName("Mike Ross", "new.email@arkx.group");

// Calculate one week ago
const oneWeekAgo = new Date();
oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

// Delete users created before one week ago
deleteUsersBeforeDate(oneWeekAgo);
