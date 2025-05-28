import { Link } from 'react-router-dom';
import { useTaskContext } from '../context/TaskContext';

const TaskDashboard: React.FC = () => {
  const { tasks } = useTaskContext();

  return (
    <div className="dashboard">
      <h2>Task Dashboard</h2>
      <p>Manage your active tasks and track your productivity below.</p>

      <Link to="/tasks/new" className="cta-button">+ New Task</Link>

      <ul className="task-list">
        {tasks.length === 0 ? (
          <li className="empty-state">No tasks found. Start by creating one!</li>
        ) : (
          tasks.map(task => (
            <li key={task.id}>
              <Link to={`/tasks/${task.id}`}>
                <strong>{task.title}</strong><br />
                <small>{task.dueDate}</small>
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TaskDashboard;
