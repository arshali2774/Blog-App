# Blog App

This is a blog application designed to showcase backend development skills. It features user authentication, CRUD operations for posts, and a simple admin panel.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Development Dependencies](#development-dependencies)
- [Tools Used](#tools-used)
- [Database](#database)
- [Setup Guide](#setup-guide)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/arshali2774/Blog-App
   ```
2. Navigate to the project directory:
   ```bash
   cd Blog-App
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:
   ```bash
   npm start
   ```
2. Open the application in your browser at [http://localhost:3000](http://localhost:3000).

## Features

- User authentication with registration and login functionality
- CRUD operations for blog posts
- Admin panel for managing posts
- Pagination for posts on the homepage
- Search functionality
- Responsive design

## Technologies Used

- NPM Packages:
  - bcrypt
  - connect-mongo
  - cookie-parser
  - dotenv
  - ejs
  - express
  - express-ejs-layouts
  - express-session
  - jsonwebtoken
  - method-override
  - mongoose

## Development Dependencies

- nodemon

## Tools Used

- Visual Studio Code
- Postman
- MongoDB Compass

## Database

- Database Used: MongoDB
- ODM Used: Mongoose

## Setup Guide

1. This project is not hosted, so you will need to provide your own MongoDB database connection string and JWT secret key.
2. Create a user by uncommenting the register user code in index.ejs under admin folder and register route under admin.js.
3. This will add a UI for registering users. So, you can create a user through the UI rather than going to postman or to mongodb compass to create a user.
4. Create a `.env` file in the root directory and add the following variables:
   ```bash
   MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority
   JWT_SECRET=<your-secret-key>
   ```
