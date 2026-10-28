
import { useState } from "react";

function Profile() {
  const savedName = localStorage.getItem("userName") || "User";

  const [name, setName] = useState(savedName);
  const [teachSkill, setTeachSkill] = useState("");
  const [learnSkill, setLearnSkill] = useState("");
  const [loading, setLoading] = useState(false);

  const saveProfile = async () => {
    const trimmedName = name.trim();

    if (!trimmedName) {
      alert("Please enter your name.");
      return;
    }

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please log in again.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://localhost:5000/api/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name: trimmedName }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Profile update failed.");
      }

      localStorage.setItem("userName", data.user.name);
      setName(data.user.name);

      alert("Profile updated successfully!");
    } catch (error) {
      alert(error.message || "Could not update profile.");
    } finally {
      setLoading(false);
    }
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
            onChange={(e) => setTeachSkill(e.target.value)}
          />

          <label>Skill I Want to Learn</label>
          <input
            placeholder="Example: UI/UX Design"
            value={learnSkill}
            onChange={(e) => setLearnSkill(e.target.value)}
          />

          <button
            className="primary-btn full"
            onClick={saveProfile}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Profile"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
