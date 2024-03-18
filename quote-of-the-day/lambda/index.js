const MongoClient = require('mongodb').MongoClient;
// const aws = require('aws-sdk');

// // Configure AWS SDK with your credentials
// aws.config.update({
//   accessKeyId: 'YOUR_ACCESS_KEY_ID',
//   secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
//   region: 'YOUR_AWS_REGION'
// });

exports.handler = async (event, context) => {
  try {
    // Connect to MongoDB Atlas
    // Read MongoDB password from environment variable
    const mongoPassword = process.env.MONGODB_PASSWORD;
    const mongoUsername = process.env.MONGODB_USERNAME;
    // Construct MongoDB connection string
    // Construct MongoDB connection string
    const mongodbServer=`the mongodb server url from atlas`
    const mongoUri = `mongodb+srv://${mongoUsername}:${mongoPassword}@${mongodbServer}/`;

    const client = await MongoClient.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db('quote_app');
    const quotesCollection = db.collection('quotes');

    // Get the day of the year
    const dayOfYear = "77";

    // Find the quote for the day
    const quote = await quotesCollection.findOne({ "day": dayOfYear });

    // Close MongoDB connection
    client.close();

    // Return the quote
    return {
      statusCode: 200,
      body: JSON.stringify({ quote })
    };
  } catch (err) {
    console.error('Error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' })
    };
  }
};
