import React from "react";
import { createRoot } from "react-dom/client";
import parasolThumbnail from "../JVJJUX.png";
import resumePdf from "./JacobSkardaResume.pdf";
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
        <a>jacobbruceskarda@gmail.com</a>
      </nav>
      <div className="header-contacts" aria-label="Contact links">
        <a className="header-email" href="mailto:jacobbruceskarda@gmail.com">
          Email <ArrowIcon diagonal />
        </a>
        <a
          className="header-linkedin"
          href="https://www.linkedin.com/in/jacob-skarda/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn <ArrowIcon diagonal />
        </a>
      </div>
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
          Hi! I’m Jacob Skarda, a computer science student attending Brigham Young University.
        </p>
        <p className="hero-description">
          I am the lead engineer and designer for Parasol Loom, where I build and designer just about every gameplay-oriented system you see in the game.
        </p>
        <p className="hero-description">
          I am just getting started on developing my skills in low-level Computer Graphics, which is where I ultimately hope to end up.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">
            View my work <ArrowIcon />
          </a>
          <a
            className="button button-secondary"
            href={resumePdf}
            download="Jacob-Skarda-Resume.pdf"
          >
            Download resume
            <svg aria-hidden="true" className="download-icon" viewBox="0 0 16 16" fill="none">
              <path d="M8 2.5v7m0 0 3-3m-3 3-3-3M3 11.5v2h10v-2" />
            </svg>
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
          <span>GAME SYSTEMS</span>
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
            number=""
            eyebrow="ONGOING · LEAD ENGINEER"
            title="Parasol Loom"
          >
            A 3D platformer built around expressive movement. As lead engineer,
            I develop gameplay systems, character movement, camera behavior, and
            implement assets made by artists on the team.
          </ProjectHeading>
          <div className="project-facts">
            <div>
              <span className="fact-label">FOCUS</span>
              <p>Character movement, camera, asset integration</p>
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
              <p>Worked closely with other artists to integrate animations and effects authored by them into the game.</p>
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

function Footer() {
  return (
    <footer className="site-footer section-wrap">
      <div className="footer-bottom">
        <span>© 2026 JACOB SKARDA</span>
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
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
