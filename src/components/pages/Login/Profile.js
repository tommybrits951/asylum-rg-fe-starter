import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './login.css';

function Profile() {
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    isAuthenticated && (
      <div className="profile">
        <h2>User Profile</h2>
        <h3>Name: {user.name}</h3>
        <h3>Email: {user.email}</h3>
        <h3>Updated: {user.updated_at}</h3>
      </div>
    )
  );
}
export default Profile;
