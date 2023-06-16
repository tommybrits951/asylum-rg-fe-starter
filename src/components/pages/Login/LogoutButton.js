import { useAuth0 } from '@auth0/auth0-react';
import './login.css';

function LogoutButton() {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button className="login-btn" onClick={() => logout()}>
        Sign Out
      </button>
    )
  );
}
export default LogoutButton;
