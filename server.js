var MongoClient = require('mongodb').MongoClient;

const express = require('express');

var app = express();

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/ItemsDB", function (err, db) {
    
    db.collection('Items', function (err, collection) {
        
        collection.insert({ id: 11, name: 'Red Cup', color: '#FF0000' });
        collection.insert({ id: 12, name: 'Blue Cup', color: '#0000FF' });
        collection.insert({ id: 13, name: 'Black Cup ', color: '#000000' });

      
        


        db.collection('Items').count(function (err, count) {
            if (err) throw err;
            
            console.log('Total Rows: ' + count);
        });


    
    });

  

    var cursor = db.collection('Items').find();

    var data = [];
    cursor.each(function(err, doc) {

        data.push(doc)
        console.log(doc);
    
    });


    app.get('/getData', (req, res) => {
        res.json({
            "statusCode":200,
            "statusMessage":"SUCCESS",
            data
        })
    })


                
});





app.listen(3000, () => {
    console.log("Server started in port 3000!") ;
  });