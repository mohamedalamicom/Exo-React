const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Exo-React\'s server is running');
})

app.listen(port, () => {
    console.log(`Exo-React's server is open at http://localhost:${port}`)
})