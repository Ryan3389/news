import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import NewsCard from "../components/NewsCard"

function NewsPage() {
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const category = params.get('category')
    const [newsState, setNewsState] = useState([])
    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch(`/api/news/category?category=${category}`)

                if (!response.ok) {
                    throw new Error("Error fetching news category")
                }

                const data = await response.json()
                const topResults = data.results.articles.slice(0, 6)
                const updateNewsState = topResults.map(article => ({
                    title: article.title,
                    newsLink: article.url,
                    img: article.urlToImage
                }))


                console.log(updateNewsState)
                setNewsState(updateNewsState)
            } catch (error) {
                console.error(error)
            }
        }
        getData()
    }, [category])

    return (
        <section className="news-section">
            <div className="news-container">
                {newsState.map((article, index) => (
                    <NewsCard
                        title={article.title}
                        img={article.img}
                        newsLink={article.newsLink}
                        key={index}
                    />
                ))}

            </div>
        </section>
    )
}

export default NewsPage
