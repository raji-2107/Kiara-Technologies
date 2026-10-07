import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (
    <main className="home-page">
      <nav className="site-nav">
        <a className="brand" href="/" onClick={(event) => { event.preventDefault(); navigate("/"); }}>
          <span className="brand-mark">S</span>
          <span>STATE<span className="brand-light">/</span>STAGE</span>
        </a>
        <span className="nav-edition">2026 · STATEWIDE</span>
        <button className="nav-cta" onClick={() => navigate("/categories")}>Register <span>↗</span></button>
      </nav>
      <section className="home-hero">
        <div className="hero-content">
          <p className="hero-label"><span /> THE STATE'S BIGGEST TALENT STAGE (RAJESWARI R S(IT) - 2315033)</p>
          <h1 className="hero-title">State Level<br /><span>Competition</span> 2026</h1>
          <p className="hero-description">Show Your Talent. Take the Stage.</p>
          <button className="primary-button" onClick={() => navigate("/categories")}>Register Now <span>↗</span></button>
          <p className="hero-note">Open to every age. Made for every talent.</p>
        </div>
        <div className="hero-art" aria-label="A spotlighted stage surrounded by talent categories" role="img">
          <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
          <div className="spotlight" />
          <div className="stage-platform"><span>YOUR MOMENT</span></div>
          <div className="art-tag tag-one">♫ <small>SING</small></div>
          <div className="art-tag tag-two">✦ <small>CREATE</small></div>
          <div className="art-tag tag-three">◈ <small>PERFORM</small></div>
        </div>
        <div className="hero-index">01 <span>/</span> 05</div>
      </section>
      <section className="home-info" id="about">
        <p className="section-label">A STAGE FOR EVERY STORY</p>
        <h2>Big talent deserves<br />a bigger stage.</h2>
        <p className="section-intro">A celebration of creativity, courage, and community. Bring what you love to do and share it with the whole state.</p>
        <div className="info-cards">
          <article className="info-card"><span className="info-number">01</span><h3>About the Event</h3><p>A statewide gathering where emerging talent gets the spotlight, the audience, and the moment it deserves.</p></article>
          <article className="info-card"><span className="info-number">02</span><h3>Competition Categories</h3><p>Sing, cook, dance, draw, speak, or surprise us. There is room on this stage for every kind of talent.</p></article>
          <article className="info-card"><span className="info-number">03</span><h3>How It Works</h3><p>Choose your age group, pick a competition, and complete the registration form. Your stage starts here.</p></article>
        </div>
      </section>
      <footer className="site-footer"><span>STATE / STAGE 2026</span><span>One state. Countless talents.</span></footer>
    </main>
  );
}

export default Home;