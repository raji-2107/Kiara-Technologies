import { useNavigate } from "react-router-dom";

function Categories() {

  const navigate = useNavigate();

  const selectCategory = (category) => {

    navigate("/competition", {
      state: {
        category: category
      }
    });

  };

  return (
    <main className="selection-page">
      <header className="selection-header">
        <a className="small-brand" href="/" onClick={(event) => { event.preventDefault(); navigate("/"); }}>STATE<span>/</span>STAGE</a>
        <p className="eyebrow">YOUR FIRST STEP</p>
        <h1>Choose your<br /><span>age category.</span></h1>
        <p>Every great performance starts with a place on the stage.</p>
      </header>
      <section className="categories selection-content">
        <div className="category-container">


          {/* KIDS */}

          <div className="category-card">
            <div className="selection-icon">✦</div>

            <h3>Kids</h3>

            <p>
              Below 12 Years
            </p>

            <button
              onClick={() => selectCategory("Kids")}
            >
              Select Category <span>↗</span>
            </button>

          </div>


          {/* MEDIUM */}

          <div className="category-card">
            <div className="selection-icon">◈</div>

            <h3>Medium</h3>

            <p>
              12 - 18 Years
            </p>

            <button
              onClick={() => selectCategory("Medium")}
            >
              Select Category <span>↗</span>
            </button>

          </div>


          {/* UNDER 35 */}

          <div className="category-card">
            <div className="selection-icon">★</div>

            <h3>Under 35</h3>

            <p>
              19 - 35 Years
            </p>

            <button
              onClick={() => selectCategory("Under 35")}
            >
              Select Category <span>↗</span>
            </button>

          </div>


        </div>

      </section>
      <footer className="site-footer"><span>STATE / STAGE 2026</span><span>STEP 01 <b>—</b> 03</span></footer>
    </main>
  );
}

export default Categories;