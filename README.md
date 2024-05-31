            CODE FOR TOMORROW TASK

User Authentication ,Categories and Services Management API

Overview
Categories and Services Management API is a RESTful API built using Node.js, Express, Sequelize, and MySQL. The API supports JWT token-based authentication and allows users to perform CRUD operations on categories and services, including managing service price options. All endpoints, except login, require a valid JWT token.

Features

 JWT token-based login
 Create, read, update, and delete categories
 Create, read, update, and delete services within categories
 Add, remove, and update price options for services
 Valid JWT token required for all endpoints except login

Tech Stack

 Node.js: JavaScript runtime for server-side programming
 Express: Web application framework for Node.js
 Sequelize: Promise-based Node.js ORM for MySQL
 MySQL: Relational database management system
 JWT: JSON Web Token for secure authentication

Installation

Prerequisites

 Node.js (v12 or higher)
 npm (v6 or higher)
 MySQL (v5.7 or higher)

Steps

 1) Clone the repository


    git clone https://github.com/Rpatidar9/CodeForTomorrow

 2) Install dependencies
    npm install

 3) Configure the database connection in config/config.js with your MySQL credentials.

 4) Start the server
    npm run dev
    This will start the server on port 8000.

API Endpoints
  * Authentication
    1) Login
        Endpoint: POST /api/auth/signin
        Request body:

       {
        "username": "admin",
        "password": "Admin123!@#"
       }
     Response:

       {
        "id": 1,
        "username": "admin",
        "accessToken": "your.jwt.token"
       }
cURL Example:

       curl --location 'http://localhost:8000/api/auth/signin' \
       --header 'Content-Type: application/json' \
        --data-raw '{
         "username": "admin",
          "password": "Admin123!@#"
           }'

 * Category Management
    1) Create a category

       Endpoint: POST /api/category/create
       Headers:

       Authorization: Bearer your.jwt.token
       Content-Type: application/json
       Request body:

       {
         "name": "food"
       }
     cURL Example:

          curl --location 'http://localhost:8000/api/category/create' \
          --header 'Authorization: Bearer your.jwt.token' \
          --header 'Content-Type: application/json' \
         --data '{
              "name": "food"
             }'
   2) Get all categories

        Endpoint: GET /api/categories
        Headers:

        Authorization: Bearer your.jwt.token
        cURL Example:

            curl --location 'http://localhost:8000/api/categories' \
            --header 'Authorization: Bearer your.jwt.token'
            
   3) Update a category

        Endpoint: PUT /api/category/:categoryId

        Headers:

        Authorization: Bearer your.jwt.token
        Content-Type: application/json
        Request body:

       {
          "name": "Updated Category Name"
       }
     cURL Example:

         curl --location --request PUT 'http://localhost:8000/api/category/1' \
         --header 'Authorization: Bearer your.jwt.token' \
         --header 'Content-Type: application/json' \
         --data '{
           "name": "Updated Category Name"
           }'
   4) Delete an empty category

        Endpoint: DELETE /api/category/:categoryId
        Headers:

        Authorization: Bearer your.jwt.token
        cURL Example:

         curl --location --request DELETE 'http://localhost:8000/api/category/1' \
          --header 'Authorization: Bearer your.jwt.token'


* Service Management
    1)  Create a service in a category

       Endpoint: POST /api/category/:categoryId/service

       Headers:

          Authorization: Bearer your.jwt.token
          Content-Type: application/json
          Request body:{
             "name":"french food",
             "type":"food"
            }

cURL Example:
          curl --location 'http://localhost:8000/api/category/12/service/create' \
          --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWQiOjEsImlhdCI6MTcxNzA1NjUxMn0.YjvX_TNNUonNjDt83TJSc_o3HrNsnMzYGFwyYmGabqM' \
          --header 'Content-Type: application/json' \
         --data '{
          "name":"french food",
          "type":"food"
          }'

  2)  Get all services in a category

          Endpoint: GET http://localhost:8000/api/category/11/service/get
          Headers:
        
          Authorization: Bearer your.jwt.token
       cURL Example:
           curl --location 'http://localhost:8000/api/category/11/service/get' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWQiOjEsImlhdCI6MTcxNzA1NjUxMn0.YjvX_TNNUonNjDt83TJSc_o3HrNsnMzYGFwyYmGabqM' \
--data ''

   3)  Update  services in a category
          Endpoint: PATCH http://localhost:8000/api/category/1/service/update/4

       Headers:

        Authorization: Bearer your.jwt.token
        Content-Type: application/json
        Request body:

       {
       {
        "type":"foods"
        }
       }
      cURL Example:
      curl --location --request PATCH 'http://localhost:8000/api/category/1/service/update/4' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWQiOjEsImlhdCI6MTcxNzA1NjUxMn0.YjvX_TNNUonNjDt83TJSc_o3HrNsnMzYGFwyYmGabqM' \
--header 'Content-Type: application/json' \
--data '{
    "type":"foods"
}'


   4)  Delete a service from a category

       Endpoint: DELETE http://localhost:8000/api/category/1/service/delete/1
          Headers:

           Authorization: Bearer your.jwt.token
        cURL Example:
curl --location --request DELETE 'http://localhost:8000/api/category/1/service/delete/1' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWQiOjEsImlhdCI6MTcxNzA1NjUxMn0.YjvX_TNNUonNjDt83TJSc_o3HrNsnMzYGFwyYmGabqM' \
--data ''