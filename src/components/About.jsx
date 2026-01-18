import '../styles/about.css'

const About = () => {
    return (
        <div className="about-container">
            <div className="about-info">
                <h2 className="about-title">About</h2>
                <p className="about-text">
                    I'm an AI and Machine Learning Engineer based in San Francisco incubated at Harvard Innovation Labs. I operate at the nexus of systems architecture and human-centered AI. My expertise spans the full technical stack—from orchestrating complex data pipelines and fine-tuning models to architecting scalable full-stack applications.
                </p>

                <p className="about-text">
                    Currently, I'm Founder and CEO of <a href="https://stayclassy.ai" target="_blank" rel="noopener noreferrer" className="about-link">Classy AI</a>, a Socratic learning platform powered by a custom fine-tuned research-backed reasoning model. Classy AI has been selected as a Harvard President's Innovation Challenege 2026 Semifinalist. 
                </p>

                <p className="about-text">
                    I'm driven by the notion that anything is possible and I'm dedicated to building ethical systems that enhance what humans are capable of. 
                </p>
            </div>
        </div>
    )
}

export default About;