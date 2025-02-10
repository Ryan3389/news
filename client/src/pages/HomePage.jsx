import { Link } from 'react-router-dom'
function HomePage() {
    return (
        <section className="hero-section">
            <article className="hero-cta">
                <h1>Stay Informed. Stay Ahead</h1>
                <p>Breaking news, trending stories, and in-depth analysis – all in one place. Get the latest updates from around the world, tailored to your interests.</p>
                <Link to='/search' className='hero-search-btn'>Search for News</Link>
            </article>
        </section>
    )
}

export default HomePage