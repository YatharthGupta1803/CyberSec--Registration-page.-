import React from 'react';
import { Code, Trophy, Users, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="about" role="region" aria-labelledby="about-heading">
      <div className="container">
        <h2 id="about-heading" className="section-title">
          <span className="title-bracket">[</span>
          MISSION BRIEFING
          <span className="title-bracket">]</span>
        </h2>

        <div className="about-content">
          <p className="mission-statement">
            Elite training ground for the next generation of cyber defenders. 
            Master the art of digital warfare through hands-on experience and cutting-edge techniques.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Code aria-hidden="true" />
              </div>
              <h3>Hands-On Learning</h3>
              <p>Real-world cybersecurity scenarios and lab environments</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Trophy aria-hidden="true" />
              </div>
              <h3>Competitions</h3>
              <p>CTF tournaments and cybersecurity challenges</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Users aria-hidden="true" />
              </div>
              <h3>Expert Workshops</h3>
              <p>Industry professionals sharing cutting-edge techniques</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <BookOpen aria-hidden="true" />
              </div>
              <h3>Certification Prep</h3>
              <p>Guidance for industry certifications and career paths</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;