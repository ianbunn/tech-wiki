# MongoDB

## Server-side CLI

### Drop DB

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