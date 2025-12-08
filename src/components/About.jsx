import '../styles/about.css'

const About = () => {
    return (
        <div className="about-container">
            <div className="about-info">
                <h2 className="about-title">About</h2>
                <p className="about-text">
                    I'm an AI and Machine Learning Engineer based in San Francisco operating at the nexus of robust systems architecture and human-centered design. My expertise spans the full technical stack—from orchestrating complex data pipelines and fine-tuning models to architecting scalable full-stack applications.
                </p>

                <p className="about-text">
                    Currently, I'm building <a href="https://stayclassy.ai" target="_blank" rel="noopener noreferrer" className="about-link">Classy AI</a>, a Socratic learning platform powered by a custom fine-tuned reasoning model. I'm dedicated to building technology that champions integrity and deep conceptual understanding.
                </p>

                <p className="about-text">
                    I'm driven by the conviction that AI should serve to elevate intelligence rather than replace it. I prioritize clean, maintainable code and durable system design to create tools that enhance what humans are capable of.
                </p>
            </div>
        </div>
    )
}

export default About;