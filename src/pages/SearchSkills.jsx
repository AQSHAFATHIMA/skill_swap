import { useState } from "react";

function SearchSkills() {
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const [loadingSkill, setLoadingSkill] = useState("");

  const skills = [
    { name: "Python", category: "Programming", teacher: "Arun" },
    { name: "Java", category: "Programming", teacher: "Karthik" },
    { name: "Graphic Design", category: "Design", teacher: "Meena" },
    { name: "Web Development", category: "Technology", teacher: "Rahul" },
    { name: "Photography", category: "Creative", teacher: "Priya" }
  ];

  const filteredSkills = skills.filter((skill) =>
    skill.name.toLowerCase().includes(search.toLowerCase())
  );

  async function requestSwap(skill) {
    setMessage("");

    const token = localStorage.getItem("token");
    const userName = localStorage.getItem("userName");

    if (!token || !userName) {
      setMessage("Please log in first, then try Request Swap.");
      return;
    }

    const skillToTeach = window.prompt(
      "You want to learn " +
        skill.name +
        ". Which skill can you teach in exchange?"
    );

    if (!skillToTeach || !skillToTeach.trim()) {
      setMessage("Request cancelled. Please enter a skill you can teach.");
      return;
    }

    try {
      setLoadingSkill(skill.name);

      const response = await fetch("http://localhost:5000/api/swaps", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token
        },
        body: JSON.stringify({
          learnerName: userName,
          skillToLearn: skill.name,
          skillToTeach: skillToTeach.trim()
        })
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Unable to submit the swap request.");
        return;
      }

      setMessage(
        "Success! You requested to learn " +
          skill.name +
          " and offered to teach " +
          skillToTeach.trim() +
          "."
      );
    } catch (error) {
      console.error("Swap request error:", error);
      setMessage(
        "Could not connect to the backend. Please check that it is running."
      );
    } finally {
      setLoadingSkill("");
    }
  }

  return (
    <div className="search-page">
      <h1>Find a Skill</h1>

      <p>Search for people who can teach the skill you want to learn.</p>

      <input
        className="search-input"
        type="text"
        placeholder="Search skills..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {message && (
        <p role="status" aria-live="polite">
          {message}
        </p>
      )}

      <div className="search-results">
        {filteredSkills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-icon">{skill.name.charAt(0)}</div>

            <div>
              <h3>{skill.name}</h3>
              <p>{skill.category}</p>

              <p>
                Can be taught by: <strong>{skill.teacher}</strong>
              </p>

              <button
                className="swap-btn"
                onClick={() => requestSwap(skill)}
                disabled={loadingSkill !== ""}
              >
                {loadingSkill === skill.name
                  ? "Submitting..."
                  : "Request Swap"}
              </button>
            </div>
          </div>
        ))}

        {filteredSkills.length === 0 && (
          <p>No skills found. Try another search.</p>
        )}
      </div>
    </div>
  );
}

export default SearchSkills;
