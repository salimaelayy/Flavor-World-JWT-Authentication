# Recipe API Project

This is a Recipe API project that allows you to perform CRUD (Create, Read, Update, Delete) operations on recipes using MongoDB as the database and following the MVC architecture.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create, retrieve, update, and delete recipes.
- Store recipe data in MongoDB.
- Follows the MVC architecture.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed.
- MongoDB installed and running.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/recipe-api.git
    
Navigate to the project directory:


## Configuration
Create a .env file in the project root and configure the following:

## env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/recipe-api
Adjust the MongoDB URI and other configurations as needed.

## Usage
Start the server:
npm start

## bash
npm start
The API will be available at http://localhost:3000.

## API Endpoints:

Create Recipe:
POST /api/recipes/create

Get All Recipes:
GET /api/recipes

Get Recipe by ID:
GET /api/recipes/readbyid/:id

Get Recipe by Title:
GET /api/recipes/readbyid/:title

Update Recipe:
PUT /api/recipes/update/:id

Delete Recipe:
DELETE /api/recipes/delete/:id
