Task manager
=============
This application supposed to be used as an exercise for the following tech stack:
* NodeJS + Express
* MongoDB + Mongoose
* Backbone
* RequireJS
* Bootstrap
* Highcharts
* REST for client-server communication

Project setup
=============
1. Install NodeJS
2. Install MongoDB
3. Start MongoDB
4. Install Bower
5. Run "npm install && bower install" command from the app root folder
6. Run "node app" command from the app root folder
Once you'll able to start NodeJS sever - you should see the following in your console:
* App listening at http://:::3000
* mongodb has been started

Project structure
=============
* test-todo-app/
* app.js - entry point for NodeJS app
* /public/
* /public/css/ - stylesheets
* /public/js/
* /public/js/main.js - entry point for RequireJS
* /public/js/router.js - Backbone router
* /public/js/collections/ - Backbone collections
* /public/js/models/ - Backbone models
* /public/js/views/ - Backbone views
* /public/templates/ - Underscore templates
* /app/router.js - contains Express routes API
* /app/controllers/ - contains Express controllers
* /app/models/ - contains MongoDB models definition
* /app/views/ - contains server side views (Handlebars as a view-engine)
