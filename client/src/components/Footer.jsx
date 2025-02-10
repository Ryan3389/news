import { Link } from 'react-router-dom'
function Footer() {
    return (
        <footer>
            <span className='footer-container'>
                <p>NewsHub</p>
                <span>
                    <Link to="/">Home</Link>
                    <a target='_blank' href="https://github.com/Ryan3389">GitHub</a>
                    <a target='_blank' href="https://ryancuthbert.netlify.app/">Portfolio</a>
                </span>
                <p>Copyright &copy; Ryan Cuthbert</p>

            </span>
        </footer>
    )
}

export default Footer