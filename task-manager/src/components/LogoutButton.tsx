import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

const LogoutButton: React.FC = () => {
  const { logout, isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <Button
      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
    >
      Log Out
    </Button>
  ) : null;
};

export default LogoutButton;
