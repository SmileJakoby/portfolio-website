import React from "react";
import { createRoot } from "react-dom/client";
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

function WireframeMark() {
  return (
    <svg
      className="wireframe-mark"
      viewBox="0 0 400 360"
      fill="none"
      aria-hidden="true"
    >
      <g className="wireframe-lines">
        <path d="m201 34 144 83v167l-144 42-146-84V76l146-42Z" />
        <path d="m55 76 146 84 144-43M201 160v166m0-292v126M55 243l146-83 144 82M127 118v167m146-168v167M55 159l290 83M128 52l145 83v167M273 52 128 135" />
        <path d="m56 76 145-42 144 83M55 243l146 83 144-42" />
        <circle cx="201" cy="160" r="5" />
        <circle cx="345" cy="117" r="5" />
        <circle cx="55" cy="243" r="5" />
      </g>
      <g className="axis-lines">
        <path d="M201 160h70M201 160l-38-54M201 160v77" />
        <path d="m268 156 5 4-5 4M160 108l3-2 3 2M197 233l4 4 4-4" />
      </g>
    </svg>
  );
}

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
          <span className="eyebrow-line" />
          COMPUTER SCIENCE · BYU ’27
        </p>
        <h1>
          Building the
          <br />
          <span>systems behind</span>
          <br />
          the experience.
        </h1>
        <p className="hero-description">
          I’m Jacob, an engineer interested in real-time graphics, game systems,
          and the details that make interactive worlds feel right.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">
            Explore my work <ArrowIcon />
          </a>
          <a className="text-link" href="mailto:jacobbruceskarda@gmail.com">
            Get in touch <ArrowIcon diagonal />
          </a>
        </div>
        <div className="hero-footnote">
          <span className="availability-mark" />
          Seeking software and game-engine internships
        </div>
      </div>
      <div className="hero-visual" aria-label="Decorative wireframe diagram">
        <div className="visual-topline">
          <span>FIG. 01</span>
          <span>TRANSFORM / 3D</span>
        </div>
        <WireframeMark />
        <div className="visual-axis-label x-label">X</div>
        <div className="visual-axis-label y-label">Y</div>
        <div className="visual-axis-label z-label">Z</div>
        <div className="visual-coordinates">
          <span>REAL-TIME</span>
          <span>PROVO, UT</span>
        </div>
        <div className="visual-index">01 — 03</div>
      </div>
      <a className="scroll-cue" href="#work">
        <span className="scroll-line" />
        SCROLL TO EXPLORE
      </a>
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

function Work() {
  return (
    <section className="work-section section-wrap" id="work">
      <div className="section-heading">
        <div>
          <p className="eyebrow">SELECTED WORK</p>
          <h2>Engineering in motion.</h2>
        </div>
        <span className="section-count">01—02</span>
      </div>

      <article className="project-card parasol-card">
        <div className="project-topline">
          <span>01 / GAME SYSTEMS</span>
          <span>UNREAL ENGINE 5</span>
        </div>
        <div className="video-frame">
          <iframe
            src="https://www.youtube-nocookie.com/embed/1P4dWU4c0b4?rel=0"
            title="My contributions to Parasol Loom — Jacob Skarda"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="project-details">
          <ProjectHeading
            number="01"
            eyebrow="ONGOING · LEAD ENGINEER"
            title="Parasol Loom"
          >
            A 3D platformer built around expressive movement. I’m the primary
            engineer, working across character systems, camera behavior, and
            level design.
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
          <span>FEATURE VIDEO</span>
        </div>
      </article>

      <article className="project-card graphics-card">
        <div className="project-topline">
          <span>02 / GRAPHICS FUNDAMENTALS</span>
          <span>IN PROGRESS</span>
        </div>
        <div className="graphics-content">
          <div className="graphics-visual">
            <span className="graphics-visual-label">ILLUSTRATIVE / 3D TRANSFORMS</span>
            <WireframeMark />
            <div className="graphics-coordinates">
              <span>POSITION</span>
              <span>ROTATION</span>
              <span>TRANSFORM</span>
            </div>
          </div>
          <div className="graphics-copy">
            <ProjectHeading
              number="02"
              eyebrow="LEARNING PROJECT · EARLY STAGE"
              title="Wireframes in motion"
            >
              A small experiment using linear algebra to move wireframes. It’s
              an early step in learning computer graphics and low-level
              rendering—not a finished renderer.
            </ProjectHeading>
            <div className="learning-note">
              <span className="note-marker">↳</span>
              <p>
                Next up: keep building from the fundamentals and make each
                rendering concept visible.
              </p>
            </div>
          </div>
        </div>
        <div className="project-bottomline">
          <span>LINEAR ALGEBRA · TRANSFORMATIONS</span>
          <span>MORE TO COME</span>
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
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <h2>Engineer first.<br />Always curious.</h2>
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
        <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
        <h2>Let’s build<br />something real.</h2>
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
