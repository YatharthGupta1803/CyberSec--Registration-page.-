import React from 'react';
import { Terminal, Shield, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="hero" role="banner">
      <div className="container">
        <div className="hero-content">
          {/* Terminal window */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="terminal-button terminal-button-close"></span>
                <span className="terminal-button terminal-button-minimize"></span>
                <span className="terminal-button terminal-button-maximize"></span>
              </div>
              <div className="terminal-title">cyber-club-init.sh</div>
            </div>
            <div className="terminal-body">
              <div className="terminal-line">
                <span className="prompt">root@cyberclub:~$</span>
                <span className="command">./launch_sequence.sh</span>
              </div>
              <div className="terminal-line">
                <span className="output">Scanning network...</span>
              </div>
              <div className="terminal-line">
                <span className="output success">
                  Access granted. Intrusion detected.
                </span>
              </div>
            </div>
          </div>

          {/* Headline */}
          <h1 className="hero-title">
            <span className="glitch" data-text="INTRUSION DETECTED:">
              INTRUSION DETECTED:
            </span>
            <br />
            <span className="highlight">SOMETHING HUGE</span>
          </h1>

          {/* Tagline */}
          <p className="hero-tagline">
            The cybersecurity revolution starts here. Join the elite defenders
            of the digital realm.
          </p>

          {/* Status Indicators */}
          <div className="status-grid">
            <div className="status-item">
              <Terminal className="status-icon" aria-hidden="true" />
              <span>System: ONLINE</span>
            </div>
            <div className="status-item">
              <Shield className="status-icon" aria-hidden="true" />
              <span>Security: MAXIMUM</span>
            </div>
            <div className="status-item">
              <Zap className="status-icon" aria-hidden="true" />
              <span>Launch: IMMINENT</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hero-cta">
            <a
              href="https://forms.gle/9upyzWY3uEhkFKv88"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-link"
            >
              <button className="cta-button">
                <span>INITIALIZE ACCESS</span>
                <div className="button-glow"></div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
