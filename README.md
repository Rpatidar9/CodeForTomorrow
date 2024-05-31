Categories and Services Management API
Overview
Categories and Services Management API is a RESTful API built using Node.js, Express, Sequelize, and MySQL. The API supports JWT token-based authentication and allows users to perform CRUD operations on categories and services. The API also includes endpoints for managing service price options and supports full documentation via Postman.

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
Clone the repository

sh
Copy code
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
Install dependencies

sh
Copy code
npm install
Configure the database connection in config/config.js with your MySQL credentials.

Start the server

sh
Copy code
npm run dev
This will start the server on port 8000.

Usage
Authentication
Login
Endpoint: POST /api/auth/signin

Request body:

json
Copy code
{
  "username": "admin",
  "password": "Admin123!@#"
}
Response:

json
Copy code
{
  "id": 1,
  "username": "admin",
  "accessToken": "your.jwt.token"
}
Category Management
Create a category

Endpoint: POST /api/category/create

Headers:

sh
Copy code
Authorization: Bearer your.jwt.token
Content-Type: application/json
Request body:

json
Copy code
{
  "name": "food"
}
cURL Example:

sh
Copy code
curl --location 'http://localhost:8000/api/category/create' \
--header 'Authorization: Bearer your.jwt.token' \
--header 'Content-Type: application/json' \
--data '{
    "name": "food"
}'
Get all categories

Endpoint: GET /api/categories
Headers:
sh
Copy code
Authorization: Bearer your.jwt.token
cURL Example:
sh
Copy code
curl --location 'http://localhost:8000/api/categories' \
--header 'Authorization: Bearer your.jwt.token'
Update a category

Endpoint: PUT /api/category/:categoryId

Headers:

sh
Copy code
Authorization: Bearer your.jwt.token
Content-Type: application/json
Request body:

json
Copy code
{
  "name": "Updated Category Name"
}
cURL Example:

sh
Copy code
curl --location --request PUT 'http://localhost:8000/api/category/1' \
--header 'Authorization: Bearer your.jwt.token' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Updated Category Name"
}'
Delete an empty category

Endpoint: DELETE /api/category/:categoryId
Headers:
sh
Copy code
Authorization: Bearer your.jwt.token
cURL Example:
sh
Copy code
curl --location --request DELETE 'http://localhost:8000/api/category/1' \
--header 'Authorization: Bearer your.jwt.token'
Service Management
Create a service in a category

Endpoint: POST /api/category/:categoryId/service

Headers:

sh
Copy code
Authorization: Bearer your.jwt.token
Content-Type: application/json
Request body:

json
Copy code
{
  "name": "Service Name",
  "type": "Normal",
  "priceOptions": [
    {
      "duration": "Hourly",
      "price": 50,
      "type": "Hourly"
    }
  ]
}
cURL Example:

sh
Copy code
curl --location 'http://localhost:8000/api/category/1/service' \
--header 'Authorization: Bearer your.jwt.token' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Service Name",
    "type": "Normal",
    "priceOptions": [
        {
            "duration": "Hourly",
            "price": 50,
            "type": "Hourly"
        }
    ]
}'
Get all services in a category

Endpoint: GET /api/category/:categoryId/services
Headers:
sh
Copy code
Authorization: Bearer your.jwt.token
cURL Example:
sh
Copy code
curl --location 'http://localhost:8000/api/category/1/services' \
--header 'Authorization: Bearer your.jwt.token'
Update a service

Endpoint: PUT /api/category/:categoryId/service/:serviceId

Headers:

sh
Copy code
Authorization: Bearer your.jwt.token
Content-Type: application/json
Request body:

json
Copy code
{
  "name": "Updated Service Name",
  "type": "VIP",
  "priceOptions": [
    {
      "duration": "Weekly",
      "price": 300,
      "type": "Weekly"
    }
  ]
}
cURL Example:

sh
Copy code
curl --location --request PUT 'http://localhost:8000/api/category/1/service/1' \
--header 'Authorization: Bearer your.jwt.token' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Updated Service Name",
    "type": "VIP",
    "priceOptions": [
        {
            "duration": "Weekly",
            "price": 300,
            "type": "Weekly"
        }
    ]
}'
Delete a service from a category

Endpoint: DELETE /api/category/:categoryId/service/:serviceId
Headers:
sh
Copy code
Authorization: Bearer your.jwt.token
cURL Example:
sh
Copy code
curl --location --request DELETE 'http://localhost:8000/api/category/1/service/1' \
--header 'Authorization: Bearer your.jwt.token'
