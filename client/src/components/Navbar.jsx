import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <header>
            <nav>
                <p className='nav-title'>NewsHub</p>
                <span>
                    <Link to="/">Home</Link>
                    <Link to={`/news?category=${encodeURIComponent('politics')}`}>Politics</Link>
                    <Link to={`/news?category=${encodeURIComponent('technology')}`}>Technology</Link>
                    <Link to={`/news?category=${encodeURIComponent('sports')}`}>Sports</Link>
                </span>
            </nav>
        </header>
    )
}

export default Navbar