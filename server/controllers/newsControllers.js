require('dotenv').config()
const apiKey = process.env.API_KEY

async function newsCategory(req, res) {
    const { category } = req.query
    try {
        const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}`

        const response = await fetch(url)

        if (!response.ok) {
            throw new Error("Bad response")
        }

        const data = await response.json()
        res.status(200).json({ results: data })

    } catch (error) {
        res.status(500).json(error)
    }
}

async function searchNews(req, res) {
    const { searchTerm } = req.body
    try {
        const url = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}`

        const response = await fetch(url)
        if (!response.ok) {
            throw new Error("Error searching news")
        }
        const data = await response.json()
        res.status(200).json({ results: data })
    } catch (error) {
        res.status(500).json(error)
    }
}


module.exports = { newsCategory, searchNews }