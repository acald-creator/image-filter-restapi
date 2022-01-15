const filterImageFromURL = require('./util/util')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = process.env.PORT || 8082

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Try GET /filteredimage?image={{}}')
})

app.get('/filteredimage', async(req, res) => {
    let { image_url } = req.query

    if(!image_url) {
        return res.status(400)
            .send(`Invalid url or no url provided`)
    }
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})