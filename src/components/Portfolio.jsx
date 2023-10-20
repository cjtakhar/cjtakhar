import '../styles/portfolio.css';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <div className="portfolio">
                <div className="project a1">
                    <Link className="project-link" to="https://joinneon.com">Neon</Link>
                </div>
                <div className="project a2">
                    <Link className="project-link" to="https://cjtakhar.github.io/storymap/">Story Map</Link>
                </div>
                <div className="project a3">
                    <Link className="project-link" to="https://cjtakhar.github.io/air-q/">Air Q</Link>
                </div>
                <div className="project a4">
                    <Link className="project-link" to="https://cjtakhar.github.io/msg/">MSG</Link>
                </div>
                <div className="project a5">
                    <Link className="project-link" to="https://cjtakhar.github.io/AMA-AI/">AMA-AI</Link>
                </div>
                <div className="project a6">
                    <Link className="project-link" to="https://cjtakhar.github.io/moonphase/">MoonPhase</Link>
                </div>
                <div className="project a7">
                    <Link className="project-link" to="https://cjtakhar.github.io/sports-trivia/">Trivia</Link>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;