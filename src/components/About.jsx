import '../styles/about.css'

const About = () => {
    return (
        <div className="about-container">
            <div className="about-info">
                <h2 className="about-title">About</h2>
                 <p className="about-text">
                    Based in San Francisco, I'm an AI and Machine Learning Engineer currently incubating at <a href="https://innovationlabs.harvard.edu/" target="_blank" rel="noopener noreferrer" className="about-link">Harvard Innovation Labs.</a> I operate at the nexus of systems architecture and ethical human-centered AI. My expertise spans the full technical stack—from orchestrating complex data pipelines and fine-tuning models to architecting scalable full-stack applications.
                </p>
                <p className="about-text">
                    I'm Founder and CEO of <a href="https://stayclassy.ai" target="_blank" rel="noopener noreferrer" className="about-link">Classy AI</a>, a Socratic learning platform that increases reasoning rather than replacing it. Classy AI was selected as a 2026 <a href="https://innovationlabs.harvard.edu/presidents-innovation-challenge" target="_blank" rel="noopener noreferrer" className="about-link">Harvard President's Innovation Challenge Semifinalist</a>. 
                </p>

                <p className="about-text">
                    I'm driven by the notion that anything is possible and I'm dedicated to building ethical systems that enhance what humans are capable of. 
                </p>
            </div>
        </div>
    )
}

export default About;