const axios = require('axios');

//Fetch this URL
axios('https://pokeapi.co/api/v2/pokemon/clefairy')
    // And then run this function...
    .then(function(response){
        //Use this 'data'
        const pokemon = response.data;

        //this will display data if function works properly
        console.log(`This is a ${pokemon.name} its ID is ${pokemon.id} its height is ${pokemon.height} its weight is ${pokemon.weight}`);
    })
      
       //if any errors are found this function will run 
    .catch(function (error) {
        //handle error
        console.log("Error: " +error);
    });

    
    