# Intalling MongoDB

> Ref https://www.mongodb.com/

## Install on ubuntu as service
```
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu $(lsb_release -cs)/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo systemctl start mongod
sudo systemctl enable mongod
sudo systemctl status mongod
```

## Using docker (recommended)
Sure, here's the shortened version without the Docker installation step:
1. **Pull MongoDB Image:** 
   ```bash
   sudo docker pull mongo
   ```

2. **Run MongoDB Container:**
   ```bash
   sudo docker run -d --name my-mongodb -p 27017:27017 mongo
   ```

3. **Verify MongoDB Container:**
   ```bash
   sudo docker ps
   ```



## Mongo Atlas
> https://www.mongodb.com/atlas


### how to access mongdb atlas instance from vscode 


opaliwal/l0veumom