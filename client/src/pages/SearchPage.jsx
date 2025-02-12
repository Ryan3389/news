import { useState } from "react"
import NewsCard from "../components/NewsCard"
function SearchPage() {
    const [formState, setFormState] = useState({
        searchTerm: ""
    })
    const [newsState, setNewsState] = useState([])

    console.log(newsState.length)
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
            const topResults = data.results.articles.slice(0, 6)
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
            <form onSubmit={handleFormSubmit} className="search-form">
                <input
                    type="text"
                    name="searchTerm"
                    id="searchTerm"
                    onChange={handleChange}
                    aria-label="Search"
                    placeholder="Search for the latest news"
                />
                <input type="submit" value="Search" />
            </form>

            <section className="news-section">
                <div className="news-container">
                    {newsState.map((article, index) => (
                        <NewsCard
                            title={article.title}
                            img={article.img}
                            newsLink={article.newsLink}
                            desc={article.description}
                            key={index}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

export default SearchPage
//  {newsState.map((article, index) => (
//     <NewsCard
//         title={article.title}
//         img={article.img}
//         newsLink={article.newsLink}
//         desc={article.description}
//         key={index}
//     />
// ))} 