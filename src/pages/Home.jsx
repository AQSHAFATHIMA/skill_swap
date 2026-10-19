import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      <section className="hero">

        <div className="hero-content">

          <h1>
            Learn a Skill.
            <br />
            Share a Skill.
          </h1>

          <p>
            Skill Swap connects people who want to learn
            with people who are ready to share their knowledge.
          </p>

          <div className="hero-buttons">

            <Link to="/skills" className="primary-btn">
              Find a Skill
            </Link>

            <Link to="/register" className="secondary-btn">
              Join Skill Swap
            </Link>

          </div>

        </div>

        <div className="hero-image">
          <div className="swap-illustration">
            👩‍💻
            <span>⇄</span>
            👨‍💻
          </div>
        </div>

      </section>

      <section className="how-section">

        <h2>How Skill Swap Works</h2>

        <div className="steps">

          <div className="step">
            <div className="step-number">1</div>
            <h3>Create Profile</h3>
            <p>
              Add the skills you can teach and the skills
              you want to learn.
            </p>
          </div>

          <div className="step">
            <div className="step-number">2</div>
            <h3>Find Skills</h3>
            <p>
              Search for people who have the skills
              you want to learn.
            </p>
          </div>

          <div className="step">
            <div className="step-number">3</div>
            <h3>Swap Skills</h3>
            <p>
              Send a request and exchange knowledge
              with another user.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;