import { useLocation, useNavigate } from "react-router-dom";

function Competition() {

  const location = useLocation();
  const navigate = useNavigate();

  const category = location.state?.category;


  const competitions = [
    "Singing",
    "Cooking",
    "Dancing",
    "Drawing",
    "Speech",
    "Other Talent"
  ];

  const symbols = { Singing: "♫", Cooking: "✧", Dancing: "◌", Drawing: "✎", Speech: "“ ”", "Other Talent": "✦" };


  const selectCompetition = (competition) => {

    navigate("/register", {
      state: {
        category: category,
        competition: competition
      }
    });

  };


  return (
    <main className="selection-page">
      <header className="selection-header competition-header">
        <a className="small-brand" href="/" onClick={(event) => { event.preventDefault(); navigate("/"); }}>STATE<span>/</span>STAGE</a>
        <p className="eyebrow">STEP TWO · FIND YOUR SPOTLIGHT</p>
        <h1>Pick your<br /><span>competition.</span></h1>
        <p className="category-chip">AGE CATEGORY <strong>{category || "Not selected"}</strong></p>
      </header>
      <section className="competition selection-content">
        <h2>Choose what you love to do</h2>
        <div className="competition-container">

          {competitions.map((item) => (

            <div
              className="competition-card"
              key={item}
            >
              <div className="competition-symbol">{symbols[item]}</div>
              <h3>{item}</h3>

              <button
                onClick={() => selectCompetition(item)}
              >
                Choose competition <span>↗</span>
              </button>

            </div>

          ))}

        </div>

      </section>
      <footer className="site-footer"><span>STATE / STAGE 2026</span><span>STEP 02 <b>—</b> 03</span></footer>
    </main>
  );
}

export default Competition;