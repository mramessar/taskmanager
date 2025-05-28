import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

const LoginButton: React.FC = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return !isAuthenticated ? (
    <Button onClick={() => loginWithRedirect()}>Log In</Button>
  ) : null;
};

export default LoginButton;
