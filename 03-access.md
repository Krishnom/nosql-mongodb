# Connect to MongoDB 

## MongoDB Shell

### Install mongosh
> Ref https://www.mongodb.com/try/download/shell
```
wget https://downloads.mongodb.com/compass/mongodb-mongosh_2.2.0_amd64.deb

```
### Connect to mongoserver
> Ref: https://www.mongodb.com/docs/mongodb-shell/

General syntax to connect to remote mongdb instance is `mongosh "mongodb+srv://mongo-server-ip/myFirstDatabase" --apiVersion 1` 


```bash
# Bydefault mongosh connects to mongodb+srv://localhost:27017/test
mongosh
```

#### Show all dbs.
```bash
test> show dbs
```

> In MongoDB, you don't directly create a database in the same way you do in relational databases like MySQL. Instead, MongoDB creates databases and collections on the fly when you first store data into them. However, you can switch to a specific database or create one by storing data into it. Here's how you can do it in the mongosh shell:

for e.g. if you run below command, mongodb will create the database test2 for you
```bash
test> use test2
switched to db test2
test2>
```


## Compass (the GUI way)
https://www.mongodb.com/try/download/compass