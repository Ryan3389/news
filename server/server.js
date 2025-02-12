const express = require('express')
const routes = require('./routes')
const path = require("path")

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(express.static(path.join(__dirname, '../client/dist')))

app.use(routes)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
})


app.listen(PORT, () => {
    console.log('Running on http://localhost:3001')
})

