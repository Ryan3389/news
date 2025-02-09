import { Link } from 'react-router-dom'
function Footer() {
    return (
        <footer>
            <span className='footer-container'>
                <p>NewsHub</p>
                <span>
                    <Link>Home</Link>
                    <Link>GitHub</Link>
                    <Link>Portfolio</Link>
                </span>
                <p>Copyright &copy; Ryan Cuthbert</p>

            </span>
        </footer>
    )
}

export default Footer