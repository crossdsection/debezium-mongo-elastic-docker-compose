# debezium-mongo-elasticsearch-docker-compose
Docker Compose File to create realtime syncing between mongo and elasticsearch using debezium

```
sudo docker-compose build
sudo docker-compose up
```
Open Postman or use curl, use JSONs placed at `./curlPostConnectJSONS` to post requests at `http://localhost:8083/connectors/`

Modify DB name, collection name accordingly.
