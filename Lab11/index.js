//this imports mongodb
import MongoClient from 'mongodb';
//defines URL
const URL = "mongodb+srv://cchavez:DVDKcp6h9TH2ks4j@cluster0.oewwc.mongodb.net/test";

//connects to database
MongoClient.connect(URL, { useUnifiedTopology: true})
.then(connection => {
    let database = connection.db("sample_airbnb");

    let collection = database.collection("listingsAndReviews");
    //will filter findings based on what you are looking for
    let cursor = collection.find({review_scores: {$gte: "99"}, beds: {$gte: 5}, price: {$lte: "200"}});
    //displays elements in console
    cursor.forEach(document => {
        console.log(document.name);
    }, () => {
        connection.close();
    })
})
//this will display if there are any errors
.catch(error => {
    console.log("Error: " + error);
});