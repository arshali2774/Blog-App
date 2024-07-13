NPM Packages used for this project

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

Development dependencies

- nodemon

Tools used

- vscode
- postman
- mongodb compass

Database used

- mongodb

ODM used

- mongoose

Journal

1. Installed all the packages
2. Created .env file
3. Boilerplate code for app.js like, setting port, static files, templating engine, using express layouts, using router, starting server.
4. Created server folder and routes folder inside it, then added main.js inside routes folder.
5. Created views folder with layouts directory and an index.ejs file inside it.
6. Layouts folder has a main.ejs file inside it.
7. Added HTML to main.ejs file in layouts folder.
8. Added `<%- body %>` to main.ejs file to render the body of the page.
9. Added metadata to main.ejs file, using `locals` object in main.js file.
10. Added css and js files to public folder.
11. Linked css and js files in main.ejs file.
12. Created header and footer partials in partials folder.
13. Included header and footer partials in main.ejs file.
14. Made the search bar and added it to the layout.
15. Completed all the styling and layout of the site.
16. Added mongodb connection string to .env file.
17. Create a config folder in server directory.
18. Added a db.js file inside config folder.
19. Added a connectDB function inside db.js file.
20. Invoking the connectDB function inside app.js file.
21. Added models folder inside server folder.
22. Created a post schema in post.js file inside models folder.
23. Added a posts in the database.
24. Getting the posts from the database to display on the home page.
25. Rendering the posts on the home page.
26. Added pagination to the home page.
27. Added route for individual post.
28. Added post.ejs for individual post.
29.
