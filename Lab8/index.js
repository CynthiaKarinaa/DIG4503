//imports express
import Express from "express";
import fs from "fs";

const App= Express();
//defines port used
const port = 3010;
//Will read database.jsonfile
let fileContents = fs.readFileSync("database.json");

let database = JSON.parse(fileContents);
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

App.listen(port, () => {
    console.log("Server running!");
})

