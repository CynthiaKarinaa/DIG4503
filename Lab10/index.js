//imports express
import Express from "express";
import fs from "fs";
import cors from "cors";




const App= Express();
//defines port used
const port = 3010;
App.use(cors());
//Will read database.jsonfile
let fileContents = fs.readFileSync("database.json");

let database = JSON.parse(fileContents);
//uses data in public folder
App.use("/", Express.static("client/build"));
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

});
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
    console.log("Server running!");
});
