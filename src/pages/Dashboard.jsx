function Dashboard() {

  const name =
    localStorage.getItem("userName") || "User";

  return (

    <div className="dashboard">

      <h1>Hello, {name} 👋</h1>

      <p>
        Welcome to your Skill Swap dashboard.
      </p>

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
          <strong>5</strong>
          <p>Pending requests</p>
        </div>

      </div>

      <h2 className="request-title">
        Recent Swap Requests
      </h2>

      <div className="request">

        <div>
          <h3>Rahul wants to learn Python</h3>
          <p>
            Rahul can teach Web Development in exchange.
          </p>
        </div>

        <div>
          <button className="accept">
            Accept
          </button>

          <button className="reject">
            Reject
          </button>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;