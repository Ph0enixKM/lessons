const express = require('express')
const fs = require('fs')
const app = express()
const port = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.type('text/html')
    res.status(200)
    res.end(fs.readFileSync(__dirname + '/index.html', 'utf-8'))
})

app.get('/style', (req, res) => {
    res.header('Content-Type', 'text/css')
    res.status(200)
    res.end(fs.readFileSync(__dirname + '/style.css', 'utf-8'))
})
app.listen(port, () => console.log('Server started'))
