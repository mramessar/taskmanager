import { useParams, useNavigate } from 'react-router-dom';
import { useTaskContext } from '../context/TaskContext';

const TaskDetailsPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, deleteTask } = useTaskContext();

  const task = tasks.find(t => t.id === Number(id));

  if (!task) {
    return <p style={{ padding: '2rem', textAlign: 'center' }}>Task not found.</p>;
  }

  const handleDelete = () => {
    deleteTask(task.id);
    navigate('/tasks');
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Task Details</h2>

      <div
        style={{
          background: 'white',
          padding: '1.5rem',
          borderRadius: '10px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
          marginBottom: '1.5rem',
        }}
      >
        <p><strong>Title:</strong> {task.title}</p>
        <p><strong>Description:</strong> {task.description}</p>
        <p><strong>Due Date:</strong> {task.dueDate}</p>
        <p>
          <strong>Status:</strong>{' '}
          <span style={{ color: task.completed ? 'green' : 'orangered', fontWeight: '600' }}>
            {task.completed ? 'Completed' : 'Incomplete'}
          </span>
        </p>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <button onClick={() => navigate(`/tasks/${task.id}/edit`)}>
          Edit Task
        </button>
        <button onClick={handleDelete} style={{ backgroundColor: 'red', color: 'white' }}>
          Delete Task
        </button>
      </div>
    </div>
  );
};

export default TaskDetailsPage;
