import Express from 'express';
const App = Express();
const port = 3000;

const pets =[
    'cat',
    'dog',
    'bird'
];

App.get('/pet/:type', (req, res) => {
    let type = req.params.type;
    if (pets.includes(type)){
    res.json({Pet: type});
    }
});

App.listen(port, () => {

});