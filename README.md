
# Movies-Filter

In This Project, 

* Filters the movie selections by Language, Country, or Genre





## Run BackEnd Locally


Go to the project directory

```bash
  cd movies-scan

  cd server
```

Install dependencies

```bash
    npm init
    npm install
```

Start the server

```bash
  nodemon
```
In .env 
```
MONGODB_URI = "your-db address/Movies"
PORT= 5000
```
server will run on localhost:5000

## Run FrontEnd Locally


Go to the project directory

```bash
  cd movies-scan

  cd frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```
it will run on localhost:3000

* If your MONGODB_URI not working then
 use the api : https://movies-filter-zmla.onrender.com/
 
 * at frontend/src/movies.jsx
