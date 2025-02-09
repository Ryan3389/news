import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <header>
            <nav>
                <p>NewsHub</p>
                <span>
                    <Link>Business</Link>
                    <Link>Technology</Link>
                    <Link>Sports</Link>
                </span>
            </nav>
        </header>
    )
}

export default Navbar