const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

app.get('/countries/:keywords?', (req, res, next) => {
    // Retrieving keywords (optional) 
    let searchKeywords = req.params.keywords;

    // Reading from countries list JSON
    let data = fs.readFileSync('./countries.json');
    let countries = JSON.parse(data);

    if (searchKeywords) {
        let results = [];

        countries.forEach(country => {
            if (country.name.toUpperCase().includes(searchKeywords.toUpperCase()))
                results.push(country);
        })

        res.send(results);
    }

    res.send(countries);
})

app.get('/', (req, res) => {
    res.send('Exo-React\'s server is running');
})

app.listen(port, () => {
    console.log(`Exo-React's server is open at http://localhost:${port}`)
})