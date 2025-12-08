import '../styles/portfolio.css';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    const handleLinkClick = (e) => {
        e.preventDefault();
        window.location.reload();
    }
    return (
        <div className="portfolio-container">
            <div className="portfolio">
                <div className="project a1">
                    <Link className="project-link" to="https://stayclassy.ai">ClassyAI</Link>
                </div>
                <div className="project a2">
                    <Link className="project-link" to="https://github.com/cjtakhar/nextbuy">NextBuy</Link>
                </div>
                <div className="project a3">
                    <Link className="project-link" to="https://github.com/cjtakhar/nyc-taxi">TaxiData</Link>
                </div>
                <div className="project a4">
                    <Link className="project-link" to="https://cjtakhar.github.io/gem-ui/">ChatBot</Link>
                </div>
                <div className="project a5">
                    <Link className="project-link" to="https://cjtakhar.github.io/tetris/">Tetris</Link>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;