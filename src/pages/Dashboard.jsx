
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [name, setName] = useState(
    localStorage.getItem("userName") || "User"
  );

  const [requests, setRequests] = useState([
    {
      id: 1,
      learner: "Rahul",
      learn: "Python",
      teach: "Web Development",
      status: "Pending",
    },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  const handleRequest = (id, status) => {
    setRequests((previous) =>
      previous.map((request) =>
        request.id === id ? { ...request, status } : request
      )
    );
  };

  return (
    <div className="dashboard">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
          marginBottom: "24px",
        }}
      >
        <div>
          <h1>Hello, {name} 👋</h1>
          <p>Welcome to your Skill Swap dashboard.</p>
        </div>

        <button
          onClick={handleLogout}
          style={{
            background: "#dc2626",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "11px 22px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Logout
        </button>
      </div>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Skills I Teach</h3>
          <strong>4</strong>
          <p>Skills available for sharing</p>
        </div>

        <div className="dashboard-card">
          <h3>Skills I Want</h3>
          <strong>3</strong>
          <p>Skills you want to learn</p>
        </div>

        <div className="dashboard-card">
          <h3>Swap Requests</h3>
          <strong>{requests.length}</strong>
          <p>Pending requests</p>
        </div>
      </div>

      <h2 className="request-title">Recent Swap Requests</h2>

      {requests.length === 0 ? (
        <p>No recent swap requests.</p>
      ) : (
        requests.map((request) => (
          <div
            className="request"
            key={request.id}
            style={{ marginBottom: "16px" }}
          >
            <div>
              <h3>
                {request.learner} wants to learn {request.learn}
              </h3>
              <p>
                {request.learner} can teach {request.teach} in exchange.
              </p>
              <p>
                <strong>Status: {request.status}</strong>
              </p>
            </div>

            {request.status === "Pending" && (
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  flexWrap: "wrap",
                }}
              >
                <button
                  className="accept"
                  onClick={() => handleRequest(request.id, "Accepted")}
                >
                  Accept
                </button>

                <button
                  className="reject"
                  onClick={() => handleRequest(request.id, "Rejected")}
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;
