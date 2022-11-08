# Front-end

### `1.Use the following URL to install the LST version of Node.js`

https://nodejs.org/en/download/

### `2.Open your terminal`

Input `node --version` and `npm --version`.

Check whether the installation is successful.

Input `cd ./front-end` to get into the front-end code folder.

Input `npm install` to install environment dependencies.

Input `npm start` to start the front-end program.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Back-end

### `1.Use the following URL to install Java 8`

https://www.java.com/en/download/


### `2.Use the following URL to install Maven`

https://maven.apache.org/download.cgi

### `3.Add environment variables in your computer`
Guide:https://maven.apache.org/install.html


Input `java -version` and `mvn -v` in your terminal to check whether the installation is successful.

### `4.Use the following URL to install MongoDB Community Server`
https://www.mongodb.com/try/download/community

### `5.Use the following URL to install MongoDB Shell and MongoDB Command Line Database Tools`
https://www.mongodb.com/try/download/shell \
https://www.mongodb.com/try/download/database-tools

### `6.Open mongosh shell and your terminal to initialize the data in mongodb`
The mongodb URI in this program for now is `mongodb://localhost:27017` 

After you get in mongodb.

Input `use nutrition` to create the database.

Input `db.createCollection("user")` and `db.createCollection("food")` to create collections.

Close the mongosh shell and open your terminal.

Go to the project folder. 

Input `mongoimport -d nutrition -c food --file ./FoodData-mongo.json` to initialize the nutrition data into the database.

### `7.Use the following URL to install Elasticsearch 7.17.5`
https://www.elastic.co/downloads/past-releases/elasticsearch-7-17-5
or https://www.elastic.co/guide/en/elasticsearch/reference/7.17/install-elasticsearch.html

### `8.Start Elasticsearch service`
Guide:https://www.elastic.co/guide/en/elasticsearch/reference/7.17/starting-elasticsearch.html

### `9.Open your terminal to initialize the data in Elasticsearch`
On windows, please use Git Bash.

The Elasticsearch URI in this program for now is `http://127.0.0.1:9200/` 

Go to the project folder. 

Input `curl -X PUT "http://127.0.0.1:9200/health_test" -H 'Content-Type: application/json' --data-binary @Mapping.json` to create the database.

Input `curl -X PUT "http://127.0.0.1:9200/health_test/_bulk" -H 'Content-Type: application/json' --data-binary @FoodData-ES.json` to initialize the nutrition data into the database.


### `10.Open your terminal and input command line to run the program`

Input `cd ./back-end` to get into the back-end code folder.

Input `mvn install` to install environment dependencies.

Input `cd ./target` to get into to the target folder 
and start the application with: \
`java -jar project-1.0-SNAPSHOT.jar`



