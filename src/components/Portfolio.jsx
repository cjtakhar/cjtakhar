import '../styles/portfolio.css';

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <div className="portfolio">
                <div className="project a1">
                    <a className="project-link" href="https://stayclassy.ai" target="_blank" rel="noopener noreferrer">
                        ClassyAI
                    </a>
                </div>
                <div className="project a2">
                    <a className="project-link" href="https://github.com/cjtakhar/nextbuy" target="_blank" rel="noopener noreferrer">
                        NextBuy
                    </a>
                </div>
                <div className="project a3">
                    <a className="project-link" href="https://github.com/cjtakhar/nyc-taxi" target="_blank" rel="noopener noreferrer">
                        TaxiData
                    </a>
                </div>
                <div className="project a4">
                    <a className="project-link" href="https://cjtakhar.github.io/gem-ui/" target="_blank" rel="noopener noreferrer">
                        ChatBot
                    </a>
                </div>
                <div className="project a5">
                    <a className="project-link" href="https://cjtakhar.github.io/tetris/">
                        Tetris
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
