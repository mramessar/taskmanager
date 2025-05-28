import { useParams, useNavigate } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import { useTaskContext } from '../context/TaskContext';
import type { Task } from '../types/Task';

const TaskFormPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  const { tasks, addTask, updateTask } = useTaskContext();
  const existingTask = tasks.find(t => t.id === Number(id));

  const handleSubmit = (task: Task) => {
  if (isEdit) {
    updateTask({ ...task, id: Number(id) });
  } else {
    addTask(task);
  }
  navigate('/tasks');
};


  return (
    <div style={{ padding: '1rem' }}>
      <h2>{isEdit ? 'Edit Task' : 'Create New Task'}</h2>
      <TaskForm initialData={existingTask} onSubmit={handleSubmit} />
    </div>
  );
};

export default TaskFormPage;
