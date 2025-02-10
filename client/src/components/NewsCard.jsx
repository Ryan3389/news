function NewsCard({ title, desc, newsLink, img, index }) {
    return (
        <article key={index}>
            <h3>{title}</h3>
            <img src={img} alt={title} className="news-img" />
            <p>{desc}</p>
            <a href={newsLink} className="news-link">
                <p>Read more</p>
            </a>
        </article>
    )
}

export default NewsCard