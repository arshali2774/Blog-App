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
29. Added middlewares like exppress.json and express.urlencoded.
30. Added route for search.
31. Created search.ejs for search page.
32. Added javascript functionality for search bar to be opend and closed.

33. Create admin folder in views directory and added index.ejs file inside it.
34. Added a layout for admin page.
35. Added a route for admin page in a separate file admin.js in routes folder.
36. Added a route for admin page in app.js file.
37. Created a user schema in user.js file inside models folder.
38. Added a register route in admin.js file only to register a user i.e. me.
39. Added session and cookie functionality in app.js file.
40. Added login functionality in admin.js file.
41. Added dashboard route in admin.js file.
42. Added dashboard.ejs file in admin folder.
43. Added edit-post route in admin.js file.
44. Added edit-post.ejs file in admin folder.
45. Added add-post route in admin.js file.
46. Added add-post.ejs file in admin folder.
47. Added delete-post route in admin.js file.
48. Added method-override package in app.js file.
49. Added logout route in admin.js file.
50. Added helper folder in server directory.
51. Added routeHelper.js file inside helper folder.
52. Added contact.ejs file in views folder.
53. Added contact route in routes.js file.
