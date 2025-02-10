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
                const topResults = data.results.articles.slice(0, 9)
                const updateNewsState = topResults.map(article => ({
                    title: article.title,
                    desc: article.description,
                    newsLink: article.url,
                    img: article.urlToImage
                }))

                console.log(updateNewsState)
                setNewsState(updateNewsState)
                //step 1: filter data - possibly randomized

                //step 2: Add filtered data to state
                //step 3: Display data on screen
            } catch (error) {
                console.error(error)
            }
        }
        getData()
    }, [])

    return (

        newsState.map((article, index) => (
            <NewsCard
                title={article.title}
                img={article.img}
                desc={article.desc}
                newsLink={article.newsLink}
                key={index}
            />
        ))

    )
}

export default NewsPage