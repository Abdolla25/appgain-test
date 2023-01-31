# Storefront Backend Project

## Getting Started

This repo contains a basic Node and Express API. To get started, clone this repo and run `yarn` in your terminal at the project root.

## Required Technologies
This application is using of the following libraries:
- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine & supertest from npm for testing
- rimraf from npm for clean/reset files for tests.
- morgan for logging to console as a middleware.
- bcrypt for password hashing and matching.
- helmet as a security profile middleware.

## Steps to Start

### 1. Clone and prepare this project locally
To get started, clone this repo and run `yarn` on your console to install all dependencies and get ready for work!

#### full secret data at `.env` file should be as below:
```
PORT=3000

ENV=dev

POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB_DEV=storefront_dev
POSTGRES_DB_TEST=storefront_test
POSTGRES_USER=postgres
POSTGRES_PASSWORD=123

BCRYPT_PASSWORD=FwbAXxPD
SALT_ROUNDS=10

JWT_TOKEN_SECRET=Kkmds-wkf-sDSA
```

**Make sure to have all the libraries installed on your machine, most of them will be installed through `yarn` command...**

### 2. Prepare your databases
start using your database engine (postgreSQL) and create two databases, the first one for development/deployment and the other one will be for testing later.

you can start your engine with any GUI tool or simply using terminal as following [for Windows users]:

```bash
> psql -U postgres
'Enter your password to login postgres user...'
> CREATE DATABASE <db_name_dev>;
> CREATE DATABASE <db_name_test>;
```

after creating your database, you can add your credentials to a new file called `.env` to make sure it is safe and secure.

#### example of `.env` file:
```
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB_DEV=storefront_dev
POSTGRES_DB_TEST=storefront_test
POSTGRES_USER=postgres
POSTGRES_PASSWORD=123
```

later we will include these data using `config.ts` file.

**Congrats! now we have our database ready for testing/migrations**

### 3. Models migration
After adding your database config you can test your connection using `yarn test` in terminal to start tests on connections for testing db and dev db also.

now, we can get start our tables migrations using `db-migrate up` or `db-migrate down` for both CREATE and DROP tables to our database.

The Following diagram and schema show how I built my model.

![ER Diagram](erdiagram.png)

![ER Diagram](schema.png)

after your run migration up you will have ready-to-use tables on your database.

**Finally, your database is ready, let's move to the next step**

### 4. API Endpoints
Each model has its endpoints to make use of database using HTTP requests.

using CRUD operations and REST API model we have the following HTTP methods:

- CREATE: using `post` request to the index of each model.
- READ: using `get` request to the index of each model or passing arg:id to read specific entry from database.
- UPDATE: using `put` request to the index of each model.
- DELETE: using `delete` request by passing arg:id to delete specific entry from database.

more details available in [REQUIREMENTS.md](REQUIREMENTS.md).

- some endpoints require validation of request using JSON Web Token which can be generated for user using `post` request to `/api/user/auth` with username and password which is stored hashed using `bcrypt` middleware.

### 5. Testing
Each endpoint has its test, also each database action has been created using model/handler has its test.

simply, run `yarn test` to start all tests.

#### Last Test Result 
```bash
yarn run v1.22.19
$ set ENV=test && npx tsc && db-migrate up --env test && npx tsc && jasmine && db-migrate down --env test -c 5
received data: CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    userName VARCHAR(50) NOT NULL UNIQUE,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL
);

[INFO] Processed migration 20220625124902-users-table
received data: CREATE TABLE orders
(
    id SERIAL PRIMARY KEY,
    OrderStatus INT NOT NULL,
    uid INT NOT NULL,
    FOREIGN KEY (uid) REFERENCES users(id)
);
[INFO] Processed migration 20220625130020-orders-table
received data: CREATE TABLE products
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    Price FLOAT NOT NULL
);
[INFO] Processed migration 20220625130748-products-table
received data: CREATE TABLE orders_products
(
  Quantity INT NOT NULL,
  OID INT NOT NULL,
  PID INT NOT NULL,
  PRIMARY KEY (OID, PID),
  FOREIGN KEY (OID) REFERENCES orders(id),
  FOREIGN KEY (PID) REFERENCES products(id)
);
[INFO] Processed migration 20220625130805-orders-products-table
[INFO] Done
Jasmine started
Server is starting at port:3000
::ffff:127.0.0.1 - GET / HTTP/1.1 200 30 - 10.087 ms

  1 Test index endpoint response
    √ test server host and port respone on its index (200)

  2 Test Authentication from User Model
    √ test auth correct user and password

  3 Test Order Model
    √ test create new order
    √ test get all orders
    √ test get specific order
    √ test update specific order
    √ test delete specific order

  4 Test Product Model
    √ test create new product
    √ test get all products
    √ test get specific product
    √ test update specific product
    √ test delete specific product

  5 Test User Model
    √ test create new user
    √ test get all users
    √ test get specific user
    √ test update specific user
    √ test delete specific user

::ffff:127.0.0.1 - POST /api/user/auth HTTP/1.1 200 496 - 88.727 ms
  6 Test user endpoint
    √ test auth endpoint
::ffff:127.0.0.1 - POST /api/user HTTP/1.1 200 191 - 131.342 ms
    √ test create endpoint
::ffff:127.0.0.1 - GET /api/user HTTP/1.1 200 336 - 3.749 ms
    √ test get all endpoint
::ffff:127.0.0.1 - GET /api/user/1 HTTP/1.1 200 177 - 2.339 ms
    √ test get one endpoint
::ffff:127.0.0.1 - PUT /api/user HTTP/1.1 200 189 - 76.157 ms
    √ test update one endpoint
::ffff:127.0.0.1 - DELETE /api/user/1 HTTP/1.1 200 176 - 6.480 ms
    √ test delete one endpoint

::ffff:127.0.0.1 - POST /api/order HTTP/1.1 200 69 - 3.750 ms
  7 Test order endpoint
    √ test create endpoint
::ffff:127.0.0.1 - GET /api/order HTTP/1.1 200 65 - 1.418 ms
    √ test get all endpoint
::ffff:127.0.0.1 - GET /api/order/1 HTTP/1.1 200 59 - 1.677 ms
    √ test get one endpoint
::ffff:127.0.0.1 - PUT /api/order HTTP/1.1 200 59 - 2.007 ms
    √ test update one endpoint
::ffff:127.0.0.1 - DELETE /api/order/1 HTTP/1.1 200 59 - 3.022 ms
    √ test delete one endpoint

::ffff:127.0.0.1 - POST /api/product HTTP/1.1 200 87 - 3.969 ms
  8 Test product endpoint
    √ test create endpoint
::ffff:127.0.0.1 - GET /api/product HTTP/1.1 200 81 - 5.044 ms
    √ test get all endpoint
::ffff:127.0.0.1 - GET /api/product/1 HTTP/1.1 200 75 - 1.987 ms
    √ test get one endpoint
::ffff:127.0.0.1 - PUT /api/product HTTP/1.1 200 29 - 2.486 ms
    √ test update one endpoint
::ffff:127.0.0.1 - DELETE /api/product/1 HTTP/1.1 200 75 - 2.267 ms
    √ test delete one endpoint

Executed 33 of 33 specs SUCCESS in 1 sec.
received data: DROP TABLE orders_products;
[INFO] Processed migration 20220625130805-orders-products-table
received data: DROP TABLE products;
[INFO] Processed migration 20220625130748-products-table
received data: DROP TABLE orders;
[INFO] Processed migration 20220625130020-orders-table
received data: DROP TABLE users;
[INFO] Processed migration 20220625124902-users-table
[INFO] Done
Done in 11.15s.
```