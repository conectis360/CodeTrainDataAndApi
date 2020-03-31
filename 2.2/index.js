const express = require('express');
const app = express();

app.listen(3000, () => console.log('Escutando a 3000'));
app.use(express.json({limit: '1mb'}));
app.use(express.static('public'));

const database = [];

app.post('/api' , (request, response) => {
    console.log(request.body);
    const json = request.body;
    database.push(json);
    console.log(database);
    response.json({
        status: "success",
        latitute: json.lat,
        longitute: json.long 
    });
});