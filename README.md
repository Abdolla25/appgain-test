# Appgain Backend Project

## Getting Started

This repo contains a basic Node and Express API. To get started, clone this repo and run `npm install` in your terminal at the project root.

## Required Technologies
This application is using of the following libraries:
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- rimraf from npm for clean/reset files for tests.

## Steps to Start

### 1. Clone and prepare this project locally
To get started, clone this repo and run `npm install` on your console to install all dependencies and get ready for work!

#### full secret data at `.env` file should be as below:
```
PORT=5000

GOOGLE_CREDS=*Google Firebase credentials*
```

**Make sure to have all the libraries installed on your machine, most of them will be installed through `npm install` command...**

### 2. Prepare your databases
start using your database using Google Firebase.

after creating your database, you can add your credentials to a new file called `.env` to make sure it is safe and secure.

**Congrats! now we have our database ready for testing/migrations**

**Finally, your database is ready, let's move to the next step**

### 4. API Endpoints
Each model has its endpoints to make use of database using HTTP requests.

using CRUD operations and REST API model we have the following HTTP methods:

- CREATE: using `post` request to the index of each model.
- READ: using `get` request to the index of each model or passing arg:id to read specific entry from database.
