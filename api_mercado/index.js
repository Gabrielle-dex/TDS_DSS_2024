const express = require('express');
const bodyparser = require('body-parser');
const indexRoutes = require('./routes/index.js');

const conn = require('/mysql-connection.js');

app.use(bodyparser.json());


 conn.raw('SELECT 1').then(() => {
        console.log(`Connected to database`);
    }).catch((error) => {
        console.log(`Error connecting to database: ${error}`);
    });

app.use(indexRoutes);
app.listen (8080,() => {
    console.log('Server running on port 8080');
});
