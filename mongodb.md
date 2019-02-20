# MongoDB

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