const express = require('express')
const routes = require('./routes')

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(routes)

app.listen(PORT, () => {
    console.log('Running on http://localhost:3001')
})

