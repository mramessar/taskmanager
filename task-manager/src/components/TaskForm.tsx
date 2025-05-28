import React, { useState } from 'react';
import type { Task } from '../types/Task';

interface TaskFormProps {
  initialData?: Task;
  onSubmit: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ initialData, onSubmit }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [dueDate, setDueDate] = useState(initialData?.dueDate || '');
  const [completed, setCompleted] = useState(initialData?.completed || false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!title.trim()) newErrors.title = 'Title is required';
    if (!description.trim()) newErrors.description = 'Description is required';
    if (!dueDate.trim()) newErrors.dueDate = 'Due date is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onSubmit({
      id: initialData?.id || Date.now(),
      title,
      description,
      dueDate,
      completed,
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        {initialData ? 'Edit Task' : 'Create a New Task'}
      </h2>

      <div style={{ marginBottom: '1rem' }}>
        <label>Title</label><br />
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Enter a task title"
        />
        {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Description</label><br />
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Add task details"
        />
        {errors.description && <p style={{ color: 'red' }}>{errors.description}</p>}
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Due Date</label><br />
        <input
          type="date"
          value={dueDate}
          onChange={e => setDueDate(e.target.value)}
        />
        {errors.dueDate && <p style={{ color: 'red' }}>{errors.dueDate}</p>}
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={e => setCompleted(e.target.checked)}
            style={{ marginRight: '0.5rem' }}
          />
          Completed
        </label>
      </div>

      <div style={{ textAlign: 'center' }}>
        <button type="submit">{initialData ? 'Update Task' : 'Create Task'}</button>
      </div>
    </form>
  );
};

export default TaskForm;
