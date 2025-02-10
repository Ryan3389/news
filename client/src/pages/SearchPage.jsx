import { useState } from "react"
import NewsCard from "../components/NewsCard"
function SearchPage() {
    const [formState, setFormState] = useState({
        searchTerm: ""
    })
    const [newsState, setNewsState] = useState([])
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch('/api/news/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formState)
            })

            if (!response.ok) {
                throw new Error("Error searching news")
            }

            const data = await response.json()
            const topResults = data.results.articles.slice(0, 9)
            const updateNewsState = topResults.map(article => ({
                title: article.title,
                img: article.urlToImage,
                newsLink: article.url
            }))
            setNewsState(updateNewsState)
            console.log(topResults)
        } catch (error) {
            console.error(error)
        }
    }

    return (

        <>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="searchTerm">Search</label>
                <input
                    type="text"
                    name="searchTerm"
                    id="searchTerm"
                    onChange={handleChange}
                    aria-label="Search"
                />
                <input type="submit" value="Search" />
            </form>

            <section className="news-section">
                {newsState.map((article, index) => (
                    <NewsCard
                        title={article.title}
                        img={article.img}
                        newsLink={article.newsLink}
                        desc={article.description}
                        key={index}
                    />
                ))}
            </section>
        </>
    )
}

export default SearchPage