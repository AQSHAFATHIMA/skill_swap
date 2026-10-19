import { useState } from "react";

function Profile() {

  const savedName =
    localStorage.getItem("userName") || "User";

  const [name, setName] = useState(savedName);
  const [teachSkill, setTeachSkill] = useState("");
  const [learnSkill, setLearnSkill] = useState("");

  const saveProfile = () => {

    localStorage.setItem("userName", name);

    alert("Profile updated successfully!");
  };

  return (

    <div className="profile-page">

      <div className="profile-card">

        <div className="profile-avatar">
          {name.charAt(0).toUpperCase()}
        </div>

        <h2>{name}</h2>

        <p>Skill Swap Member</p>

        <div className="profile-form">

          <label>Name</label>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Skill I Can Teach</label>

          <input
            placeholder="Example: Python"
            value={teachSkill}
            onChange={(e) =>
              setTeachSkill(e.target.value)
            }
          />

          <label>Skill I Want to Learn</label>

          <input
            placeholder="Example: UI/UX Design"
            value={learnSkill}
            onChange={(e) =>
              setLearnSkill(e.target.value)
            }
          />

          <button
            className="primary-btn full"
            onClick={saveProfile}
          >
            Save Profile
          </button>

        </div>

      </div>

    </div>
  );
}

export default Profile;