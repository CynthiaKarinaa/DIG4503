//imports express
import Express from 'express';
const App = Express();
//port server is displayed on
const port = 45030;
//string of names to be displayed when called
const names = [
    'Cortney',
    'Dewayne',
    'Trenton',
    'Pamala',
    'Ettie',
    'Errol',
    'Lorrie',
    'Hang',
    'Lauryn',
    'Caterina',
    'Isa',
    'Marcela'
];
//defines link where info can be found
App.get('/people/:person', (req, res) => {
    let name = req.params.person;
    if (names.includes(name)){
        res.json({ Name: name});
    } else {
        res.json({ Name: "Not Found"});
    }
})
//defines what will show when searched
App.get('/search/:person', (req, res) => {
    const result = names.filter(str =>  str.includes(req.params.person));

    if (result != 0) {
        res.json({ Search: result});
    } else {
        res.json ({Search: "Not Found"})
    }
})


App.listen(port, () => {

});
