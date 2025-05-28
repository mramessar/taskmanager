import type { Task } from '../types/Task';

export const dummyTasks: Task[] = [
  {
    id: 1,
    title: "Finish bootcamp project",
    description: "Complete all CRUD operations and polish UI",
    dueDate: "2025-06-01",
    completed: false,
  },
  {
    id: 2,
    title: "Test Auth0 integration",
    description: "Make sure protected routes redirect correctly",
    dueDate: "2025-05-29",
    completed: true,
  },
];
