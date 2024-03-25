// Import the MongoDB client
const { MongoClient } = require('mongodb');

// Connection URI
const url = 'mongodb://localhost:27017';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the MongoDB server
async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        // Call function to perform further operations
        await performDatabaseOperations(client);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// Perform database operations
async function performDatabaseOperations(client) {
    try {
        // Specify the database and collection
        const database = client.db('mydb');
        const collection = database.collection('users');

        // Insert users
        await insertUsers(collection);

        // Retrieve and print users
        await printUsers(collection);
    } catch (error) {
        console.error('Error performing database operations:', error);
    } finally {
        // Close the connection
        await client.close();
    }
}

// Insert users into the collection
async function insertUsers(collection) {
    const users = [
        { name: 'brahim', age: 26 },
        { name: 'karim', age: 18 },
        { name: 'asmae', age: 20 },
        { name: 'bouchaib', age: 55 }
    ];

    const result = await collection.insertMany(users);
    console.log(`${result.insertedCount} users inserted`);
}

// Retrieve and print all users from the collection
async function printUsers(collection) {
    const cursor = collection.find();

    console.log('Users:');
    await cursor.forEach(console.log);
}

//insert one user
mydb.users.insertOne({ name: "Arkadian", age: 22 })

// Call the function to connect to MongoDB
connectToMongoDB();
