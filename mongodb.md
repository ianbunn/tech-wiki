# MongoDB

## Helpful links

- [MongoDB Docs](https://docs.mongodb.com/)
- [MongoDB Docs - CRUD operations](https://docs.mongodb.com/manual/crud/)

## Intro to MongoDB

MongoDB is a NoSQL database. It stores data in BSON format, AKA effectively compressed JSON.

MongoDB stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time.

The document model maps to the objects in your application code, making data easy to work with.

Ad hoc queries, indexing, and real time aggregation provide powerful ways to access and analyze your data.

MongoDB is a distributed database at its core, so high availability, horizontal scaling, and geographic distribution are built in and easy to use.

MongoDB is free and open-source. Versions released prior to October 16, 2018 are published under the AGPL. All versions released after October 16, 2018, including patch fixes for prior versions, are published under the Server Side Public
License (SSPL) v1.

### Terminology compared to SQL

SQL VS MongoDB (NoSQL)

Database VS Database

Table VS Collection

Row VS Document

Column VS Field

### Research

**What are the advantages of using a noSQL database like MongoDB according to the MongoDB Website?**

**A**: MongoDB stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time.

The document model maps to the objects in your application code, making data easy to work with.

Ad hoc queries, indexing, and real time aggregation provide powerful ways to access and analyze your data.

MongoDB is a distributed database at its core, so high availability, horizontal scaling, and geographic distribution are built in and easy to use.

MongoDB is free and open-source. Versions released prior to October 16, 2018 are published under the AGPL. All versions released after October 16, 2018, including patch fixes for prior versions, are published under the Server Side Public
License (SSPL) v1.

**What are the advantages of using a noSQL database like MongoDB according to the web (places like Quora)?**

**A**: [MongoDB - Advantages of NoSQL](https://www.mongodb.com/scale/advantages-of-nosql)

## Server CLI

### Installing MongoDB on MacOS

Run the following command in Terminal:

```shell
brew install mongodb --with-openssl
```

#### Configuring MongoDB on MacOS

IMPORTANT NOTE: create a data directory for MongoDB installation, or it will NOT work.

```shell
sudo mkdir -p /data/db
```

Use the following commands to adjust the directory permissions:

```shell
sudo chown -R $USER /data/db
```

Then, run this:

```shell
sudo chmod go+w /data/db
```

With the `data/db` directory created, MongoDB is ready. Enter the following command in Terminal:

```shell
mongod
```

NOTE that `mongod` doesn't have a `b` at the end.

Read the output on the console.log to make sure that the server for MongoDB is running correctly.

#### Kill previous MongoDB server

To kill the previous `mongod` instance, first search for a list of tasks running on your machine by running this command:

```shell
sudo lsof -iTCP -sTCP:LISTEN -n -P
```

Search for `mongod` COMMAND and its `PID` and `type`. Using the `PID`, run the following command:

```shell
sudo kill <insert_mongod_PID>
```

Another command to run to kill `mongod` instance:

```shell
mongo --eval "db.getSiblingDB('admin').shutdownServer()"
```

#### Create DB

Start a new database by switching to it using the command below:

```shell
use <insertDBname>
```

#### Show the current DB

```shell
db
```

#### Show all DBs

```shell
show dbs
```

#### Show all Collections within DB

```shell
show collections
```

#### Drop DB

Use the command below to drop a database. MAKE SURE TO REPLACE THE `<insertDB>` string with the name of the DB to drop.

```shell
mongoose.connect('mongodb://localhost/<insertDB>', {
    useNewUrlParser: true,
},
function() {
    mongoose.connection.db.dropDatabase()
    }
)
```

#### Insert into DB

Make sure that `<collection_name>` is replaced by the name of the collection to insert into:

```shell
db.<collection_name>.insert({
    "key1": "property1",
    "key2": "property2",
    "array": [
        "Item1",
        "Item2",
        "Item3"
    ],
    "object": {
        "name": "nameprop",
        "name2": "nameprop2"
    }
})
```

Note that the `_id` was created automatically. This `_id` is specific for each document in the Collection.

#### Find all data in a Collection

```shell
db.<collection_name>.find()
```

#### Prettify Terminal output

Run any `find` command with a suffix of `.pretty()` to make the output data more readable:

```shell
db.<collection_name>.find().pretty()
```

#### Search data in Collection using matching `_id`

```shell
db.<collection_name>.find({
    _id: ObjectID("<insert_id>")
})
```
