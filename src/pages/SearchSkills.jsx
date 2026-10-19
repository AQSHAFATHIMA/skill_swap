import { useState } from "react";

function SearchSkills() {

  const [search, setSearch] = useState("");

  const skills = [
    {
      name: "Python",
      category: "Programming",
      teacher: "Arun"
    },
    {
      name: "Java",
      category: "Programming",
      teacher: "Karthik"
    },
    {
      name: "Graphic Design",
      category: "Design",
      teacher: "Meena"
    },
    {
      name: "Web Development",
      category: "Technology",
      teacher: "Rahul"
    },
    {
      name: "Photography",
      category: "Creative",
      teacher: "Priya"
    }
  ];

  const filteredSkills = skills.filter((skill) =>
    skill.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (

    <div className="search-page">

      <h1>Find a Skill</h1>

      <p>
        Search for people who can teach the skill
        you want to learn.
      </p>

      <input
        className="search-input"
        placeholder="Search skills..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="search-results">

        {filteredSkills.map((skill, index) => (

          <div className="skill-card" key={index}>

            <div className="skill-icon">
              {skill.name.charAt(0)}
            </div>

            <div>
              <h3>{skill.name}</h3>

              <p>{skill.category}</p>

              <p>
                Can be taught by: <strong>
                  {skill.teacher}
                </strong>
              </p>

              <button className="swap-btn">
                Request Swap
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default SearchSkills;