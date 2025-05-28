import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TaskDashboard from './pages/TaskDashboard';
import TaskFormPage from './pages/TaskFormPage';
import TaskDetailsPage from './pages/TaskDetailsPage';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* Protected Routes */}
        <Route path="/tasks" element={<PrivateRoute><TaskDashboard /></PrivateRoute>} />
        <Route path="/tasks/new" element={<PrivateRoute><TaskFormPage /></PrivateRoute>} />
        <Route path="/tasks/:id" element={<PrivateRoute><TaskDetailsPage /></PrivateRoute>} />
        <Route path="/tasks/:id/edit" element={<PrivateRoute><TaskFormPage /></PrivateRoute>} />

      </Routes>
    </>
  );
};

export default App;
