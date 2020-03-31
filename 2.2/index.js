const express = require('express');
const Datastore = require('nedb');
const app = express();

app.listen(3000, () => console.log('Escutando a 3000'));
app.use(express.json({limit: '1mb'}));
app.use(express.static('public'));

const database = new Datastore('database.db');
database.loadDatabase();

app.post('/api' , (request, response) => {
    console.log(request.body);
    const json = request.body;
    const timestamp = Date.now();
    Date.timestamp = timestamp;

    database.insert(json);
    console.log(database);
    response.json({
        status: "success",
        timestamp: timestamp,
        latitute: json.lat,
        longitute: json.long 
    });
});