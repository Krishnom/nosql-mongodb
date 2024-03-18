const MongoClient = require('mongodb').MongoClient;
const fs = require('fs');
// Connect to MongoDB Atlas
// Read MongoDB password from environment variable
// const mongoPassword = "devopsfarmer";
// const mongoUsername = "vpbNTxeBGqnCbaAW";
// // Construct MongoDB connection string
// // Construct MongoDB connection string
// const mongodbServer=`learning.wqkjhxa.mongodb.net`
const mongoUri = `mongodb+srv://devopsfarmer:vpbNTxeBGqnCbaAW@learning.wqkjhxa.mongodb.net/`;
    
const dbName = 'quote_app';
const collectionName = 'quotes';

// Quotes to be inserted
// const quotes = [
//   { text: 'Quote 1', author: 'Author 1' },
//   { text: 'Quote 2', author: 'Author 2' },
//   { text: 'Quote 3', author: 'Author 3' }
//   // Add more quotes as needed
// ];

// Read quotes from JSON file
const quotes = JSON.parse(fs.readFileSync('quotes.json', 'utf8'));

async function insertQuotes() {
  try {
    // Connect to MongoDB Atlas
    const client = await MongoClient.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Insert quotes into the collection
    const result = await collection.insertMany(quotes);
    console.log(`${result.insertedCount} quotes inserted successfully.`);

    // Close MongoDB connection
    client.close();
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the function to insert quotes
insertQuotes();
