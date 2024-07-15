// importing dotenv
import dotenv from 'dotenv';
dotenv.config();

// importing all the packages
import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import methodOverride from 'method-override';
import cookieParser from 'cookie-parser';
import MongoStore from 'connect-mongo';
import session from 'express-session';

// importing routes
import router from './server/routes/main.js';
import adminRouter from './server/routes/admin.js';
import connectDB from './server/config/db.js';

// importing helper
import { isActiveRoute } from './server/helpers/routeHelpers.js';

const app = express(); // creating express app
const PORT = process.env.PORT || 3000; // creating port

//connect to mongodb
connectDB();

app.use(express.json()); // parsing json
app.use(express.urlencoded({ extended: true })); // parsing url encoded
app.use(express.static('public')); // serving static files
app.use(cookieParser()); // cookie parser
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  })
); // session
app.use(methodOverride('_method')); // using method override

// templating engine
app.set('view engine', 'ejs'); // setting view engine
app.set('layout', './layouts/main'); // setting layout
app.use(expressLayouts); // using express layouts

app.locals.isActiveRoute = isActiveRoute; // adding helper function to locals

app.use('/', router); // using router
app.use('/', adminRouter); // using admin router

// starting server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
