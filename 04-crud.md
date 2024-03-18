# CRUD Operations in mongodb
**Exercise 1: CRUD Operations**

1. **Creating a new database and collection:**
   - Switches to the `mydatabase` database.
     ```
     use mydatabase
     ```
   - Creates a collection named `mycollection` within `mydatabase`.
     ```
     db.createCollection("mycollection")
     ```

2. **Inserting documents into the collection:**
   - Inserts a single document with name "John" and age 30.
     ```
     db.mycollection.insertOne({ "name": "John", "age": 30 })
     ```
   - Inserts multiple documents into the collection.
     ```
     db.mycollection.insertMany([
         { "name": "Alice", "age": 25 },
         { "name": "Bob", "age": 35 }
     ])
     ```

3. **Updating documents:**
   - Updates the age of the document with name "John" to 31.
     ```
     db.mycollection.updateOne({ "name": "John" }, { $set: { "age": 31 } })
     ```
   - Increments the age of documents where age is less than 30 by 1.
     ```
     db.mycollection.updateMany({ "age": { $lt: 30 } }, { $inc: { "age": 1 } })
     ```

4. **Retrieving documents:**
   - Retrieves all documents in the collection.
     ```
     db.mycollection.find()
     ```
   - Retrieves the first document with the name "Alice".
     ```
     db.mycollection.findOne({ "name": "Alice" })
     ```

5. **Deleting documents:**
   - Deletes the first document with the name "Bob".
     ```
     db.mycollection.deleteOne({ "name": "Bob" })
     ```
   - Deletes all documents where age is greater than or equal to 40.
     ```
     db.mycollection.deleteMany({ "age": { $gte: 40 } })
     ```

**Exercise 2: Querying Data**

1. **Basic queries:**
   - Retrieves documents where age is greater than 25.
     ```
     db.mycollection.find({ "age": { $gt: 25 } })
     ```
   - Retrieves documents where the name starts with "J" (case-insensitive).
     ```
     db.mycollection.find({ "name": { $regex: /^J/i } })
     ```

2. **Query with projection:**
   - Retrieves documents where age is greater than 25 and projects only the "name" field, excluding the "_id" field.
     ```
     db.mycollection.find({ "age": { $gt: 25 } }, { "name": 1, "_id": 0 })
     ```

**Exercise 3: Indexing**

1. **Creating an index:**
   - Creates an index on the "name" field to improve query performance when searching by name.
     ```
     db.mycollection.createIndex({ "name": 1 })
     ```

2. **Listing indexes:**
   - Retrieves a list of all indexes defined on the collection.
     ```
     db.mycollection.getIndexes()
     ```

**Exercise 4: Aggregation**

1. **Aggregation pipeline:**
   - Performs aggregation operations on the documents in the collection, such as grouping by age and counting occurrences, then sorting the results.
     ```
     db.mycollection.aggregate([
         { $group: { "_id": "$age", "count": { $sum: 1 } } },
         { $sort: { "_id": 1 } }
     ])
     ```