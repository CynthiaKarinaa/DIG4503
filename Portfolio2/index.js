//imports express
import Express from "express";
import fs from "fs";
import date from 'date-and-time';
import foobar from 'date-and-time/plugin/foobar';

date.plugin(foobar);
const log = console.log;
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

const App= Express();
//defines port used
const port = 3001;



let fileContents = fs.readFileSync("database.json");

let database = JSON.parse(fileContents);
//uses data in public folder
App.use("/", Express.static("public"));
//defines link to employee names
App.get("/employees/:name", (req, res) => {
    let result = {"error": "Not Found"};

    database.forEach((value) => {
        if(req.params.name == value.name) {
            result = value;
        }
    });
    res.json(result);
})
//defines link to employee ages
App.get("/employees/age/:age", (req, res) => {
    let result = {"error": "Not Found"};

    database.forEach((value) => {
        if(req.params.age == value.age) {
            result = value;
        }
    });
    res.json(result);

})
//allows you to add new data
App.post("/employees/:name/:age", (req, res) => {
    let result ={
        "name": req.params.name,
        "age": parseInt(req.params.age)
    };
    database.push(result);

    fs.writeFileSync("database.json", JSON.stringify(database, null, '\t'));

    res.json(result);
});


  
  

App.listen(port, () => {
   console.log('Server running!');
})

