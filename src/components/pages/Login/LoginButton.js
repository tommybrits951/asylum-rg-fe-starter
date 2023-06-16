import { useAuth0 } from '@auth0/auth0-react';
import './login.css';

function LoginButton() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button className="login-btn" onClick={() => loginWithRedirect()}>
        Login
      </button>
    )
  );
}
export default LoginButton;
