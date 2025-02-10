// Budget API

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 3000;


app.use('/', express.static('public'));


app.use(cors());

/*const budget = {
    myBudget: [
        {
            title: 'Restaurants',
            budget: 25
        },
        {
            title: 'Rent',
            budget: 280
        },
        {
            title: 'Grocery',
            budget: 123
        },
        {
            title: 'Misc',
            budget: 50
        },
    ]
};
*/

app.get('/hello', (req, res) => {
   res.send("Hello World");
});

/*
app.get('/budget', (req, res) => {
    res.json(budget);
 });   */

 app.get('/budget', (req, res) => {
    fs.readFile('budget-data.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(JSON.parse(data));
        }
    });
});


app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});