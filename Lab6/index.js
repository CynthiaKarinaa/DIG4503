//requires express and assigns value to app
const Express = require ("express");
const App = Express ();
//code will be displayed on selected port
const port = 3001;
// defines function
App.get('/', function (request, response){
    response.send("Hello World!");
});
//this allows you to access the html file
App.use('/public', Express.static("public"));
// tells the app to listen
App.listen(port, function (){
    console.log("Server running");
})