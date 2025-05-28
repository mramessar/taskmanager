import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const Navbar: React.FC = () => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      {isAuthenticated && (
        <>
          <Link to="/tasks" style={{ marginRight: '1rem' }}>Dashboard</Link>
          <span style={{ marginRight: '1rem' }}>
            {user?.name || user?.email}
          </span>
          <LogoutButton />
        </>
      )}
      {!isAuthenticated && <LoginButton />}
    </nav>
  );
};

export default Navbar;
