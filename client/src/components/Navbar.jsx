import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <header>
            <nav>
                <p>NewsHub</p>
                <span>
                    <Link to={`/news?category=${encodeURIComponent('politics')}`}>Politics</Link>
                    {/* <Link to={`/news?category=${encodeURIComponent('business')}`}>Business</Link> */}
                    <Link to={`/news?category=${encodeURIComponent('technology')}`}>Technology</Link>
                    <Link to={`/news?category=${encodeURIComponent('sports')}`}>Sports</Link>
                </span>
            </nav>
        </header>
    )
}

export default Navbar