// importing dotenv
import dotenv from 'dotenv';
dotenv.config();

// importing all the packages
import express from 'express';
import expressLayouts from 'express-ejs-layouts';

// importing routes
import router from './server/routes/main.js';
import connectDB from './server/config/db.js';

const app = express(); // creating express app
const PORT = process.env.PORT || 3000; // creating port

//connect to mongodb
connectDB();

app.use(express.static('public')); // serving static files

// templating engine
app.set('view engine', 'ejs'); // setting view engine
app.set('layout', './layouts/main'); // setting layout
app.use(expressLayouts); // using express layouts

app.use('/', router); // using router

// starting server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
