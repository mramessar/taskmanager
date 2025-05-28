import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      <div className="hero">
        <h1>Effortless Task Management</h1>
        <p>Stay focused and in flow. Whether you're flying solo or leading a team, your tasks stay on track.</p>
        <Link to="/login">Try It Free</Link>
      </div>

      <div className="container">
        <h2 className="section-title">Track Progress in Real Time</h2>
        <p className="section-subtext">Monitor your productivity with dynamic task summaries and instant updates.</p>

        <div className="metrics">
          <div className="metric-box">
            <strong>Tasks Completed:</strong>
            <p>32</p>
          </div>
          <div className="metric-box">
            <strong>Time Tracked:</strong>
            <p>20h 30m</p>
          </div>
          <div className="metric-box">
            <strong>Status:</strong>
            <p>✅ On Track</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
