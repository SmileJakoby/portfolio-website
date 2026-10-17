import React from "react";
import { createRoot } from "react-dom/client";
import parasolThumbnail from "../JVJJUX.png";
import "./styles.css";

const ArrowIcon = ({ diagonal = false }) => (
  <svg
    aria-hidden="true"
    className="arrow-icon"
    viewBox="0 0 16 16"
    fill="none"
  >
    {diagonal ? (
      <path d="M4 12 12 4M5 4h7v7" />
    ) : (
      <path d="M2.5 8h10m-4-4 4 4-4 4" />
    )}
  </svg>
);

function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Jacob Skarda, home">
        <span className="wordmark-icon">JS</span>
        <span>JACOB SKARDA</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="header-availability" href="mailto:jacobbruceskarda@gmail.com">
        <span className="status-dot" />
        Open to opportunities
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-wrap" id="top">
      <div className="hero-copy">
        <p className="eyebrow">
          COMPUTER SCIENCE · BYU · EXPECTED DECEMBER 2027
        </p>
        <h1>Software engineer focused on games and graphics.</h1>
        <p className="hero-description">
          I’m Jacob Skarda, a computer science student and lead engineer on
          Parasol Loom. I build gameplay systems and am developing my skills
          in computer graphics.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">
            View my work <ArrowIcon />
          </a>
          <a className="text-link" href="mailto:jacobbruceskarda@gmail.com">
            Get in touch <ArrowIcon diagonal />
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectHeading({ number, eyebrow, title, children }) {
  return (
    <div className="project-heading">
      <div className="project-number">{number}</div>
      <div className="project-heading-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
}

function VideoLink({ videoId, title, className = "", thumbnail }) {
  return (
    <a
      className={`video-frame ${className}`.trim()}
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Watch ${title} on YouTube (opens in a new tab)`}
    >
      <img
        className="video-thumbnail"
        src={thumbnail ?? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        loading="lazy"
      />
      <span className="video-play" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5.8c0-.8.9-1.3 1.6-.9l10 6.2a1 1 0 0 1 0 1.7l-10 6.2a1 1 0 0 1-1.6-.9V5.8Z" />
        </svg>
      </span>
      <span className="video-link-label" aria-hidden="true">Watch on YouTube</span>
    </a>
  );
}

function Work() {
  return (
    <section className="work-section section-wrap" id="work">
      <div className="section-heading">
        <div>
          <p className="eyebrow">FEATURED PROJECT</p>
          <h2>Parasol Loom</h2>
        </div>
        <span className="section-count">GAME DEVELOPMENT</span>
      </div>

      <article className="project-card parasol-card">
        <div className="project-topline">
          <span>01 / GAME SYSTEMS</span>
          <span>UNREAL ENGINE 5</span>
        </div>
        <VideoLink
          videoId="GjSpGz8cW54"
          title="my contributions to Parasol Loom"
          thumbnail={parasolThumbnail}
          className="parasol-video"
        />
        <div className="project-details">
          <ProjectHeading
            number="01"
            eyebrow="ONGOING · LEAD ENGINEER"
            title="Parasol Loom"
          >
            A 3D platformer built around expressive movement. As lead engineer,
            I develop gameplay systems, character movement, camera behavior, and
            performance improvements with a small multidisciplinary team.
          </ProjectHeading>
          <div className="project-facts">
            <div>
              <span className="fact-label">FOCUS</span>
              <p>Character movement, camera, optimization</p>
            </div>
            <div>
              <span className="fact-label">HIGHLIGHT</span>
              <p>
                Reduced foliage CPU cost by ~80% in a test scene; frame rate
                improved from 12 to 60 FPS.
              </p>
            </div>
            <div>
              <span className="fact-label">COLLABORATION</span>
              <p>Engineering with a small multidisciplinary team</p>
            </div>
          </div>
        </div>
        <div className="project-bottomline">
          <span>PERSONAL PROJECT · MAY 2025—PRESENT</span>
          <span>FEATURED PROJECT</span>
        </div>
      </article>

      <article className="project-card graphics-card">
        <div className="project-topline">
          <span>ALSO EXPLORING</span>
          <span>COMPUTER GRAPHICS</span>
        </div>
        <div className="graphics-content">
          <VideoLink
            videoId="iFnOApj7xDI"
            title="my computer graphics demo"
            className="graphics-video"
          />
          <div className="graphics-copy">
            <ProjectHeading
              number="02"
              eyebrow="LEARNING PROJECT"
              title="Learning computer graphics"
            >
              I’m building my understanding of graphics from the fundamentals.
              This simple demo is an early exercise in applying transformations
              and making the underlying math visible.
            </ProjectHeading>
            <div className="learning-note">
              <p>
                Current focus: linear algebra, transformations, and real-time
                rendering basics.
              </p>
            </div>
          </div>
        </div>
        <div className="project-bottomline">
          <span>EARLY STAGE · LEARNING IN PUBLIC</span>
          <span>LINEAR ALGEBRA · TRANSFORMATIONS</span>
        </div>
      </article>
    </section>
  );
}

function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-wrap about-inner">
        <div className="about-intro">
          <p className="eyebrow">ABOUT</p>
          <h2>About me</h2>
          <p className="about-description">
            I’m a senior studying computer science at Brigham Young University,
            with a software engineering emphasis and a minor in mathematics.
            I’m drawn to the low-level ideas that power real-time experiences —
            and to making them work well for the people who build and play them.
          </p>
        </div>
        <div className="about-details">
          <div className="detail-block">
            <span className="detail-index">01</span>
            <div>
              <h3>In production</h3>
              <p>
                Student developer at BYU, building and maintaining customer-facing
                tools and data integrations with development teams.
              </p>
            </div>
          </div>
          <div className="detail-block">
            <span className="detail-index">02</span>
            <div>
              <h3>Currently exploring</h3>
              <p>
                Real-time rendering, engine systems, performance, and the math
                underneath interactive graphics.
              </p>
            </div>
          </div>
          <div className="toolkit">
            <span className="fact-label">TOOLS I WORK WITH</span>
            <div className="tool-tags">
              <span>C++</span>
              <span>C</span>
              <span>Unreal Engine</span>
              <span>JavaScript</span>
              <span>SQL</span>
              <span>Unity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer className="contact-section section-wrap" id="contact">
      <div className="contact-main">
        <p className="eyebrow">GET IN TOUCH</p>
        <h2>Contact</h2>
        <a className="button button-primary" href="mailto:jacobbruceskarda@gmail.com">
          Say hello <ArrowIcon diagonal />
        </a>
      </div>
      <div className="contact-links">
        <a href="mailto:jacobbruceskarda@gmail.com">
          EMAIL <ArrowIcon diagonal />
        </a>
        <a href="https://www.linkedin.com/in/jacob-skarda/" target="_blank" rel="noreferrer">
          LINKEDIN <ArrowIcon diagonal />
        </a>
        <a href="https://smilejakoby.itch.io/" target="_blank" rel="noreferrer">
          ITCH.IO <ArrowIcon diagonal />
        </a>
      </div>
      <div className="footer-bottom">
        <span>© 2026 JACOB SKARDA</span>
        <span>DESIGNED WITH INTENTION, BUILT WITH CODE.</span>
        <a href="#top">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
        <About />
      </main>
      <Contact />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
