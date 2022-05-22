const express = require('express')
const res = require('express/lib/response')
const fs = require('fs')
const path = require('path')

const app = express()

app.get('/', (request, response) => {
    
    response.sendFile(path.join(__dirname + '/home.html'), (err) => {
        response.status(500).send(`Error occured: ${err}`)
    })
    // fs.readFile('./home.html', 'utf8', (err, html) => {
    //     if (err) {
    //     }
    //     response.send(html)
    // })
})

app.listen(process.env.PORT || 3000, () => console.log('App avaliable on http://localhost:3000'))