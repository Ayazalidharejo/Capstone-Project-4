import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Test = () => {
  const [username, setUsername] = useState('');
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [email, setEmail] = useState(''); // Assume this comes from a form or input
  const [password, setPassword] = useState(''); // Assume this comes from a form or input
  const [loginModalOpen, setLoginModalOpen] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  // Single useEffect to check login credentials
  useEffect(() => {
    // Retrieve stored user from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Check if storedUser is available and match credentials
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setUserLoggedIn(true);
      setUsername(storedUser.name);
      setLoginModalOpen(false);
      navigate('/'); // Navigate to homepage or desired path
    } else {
      alert('Something went wrong');
    }
  }, [location, email, password]); // Re-run this effect when location, email, or password changes

  const onLoginSubmit = () => {
    // You can set email and password states here based on form inputs
    // Example:
    // setEmail(inputEmail);
    // setPassword(inputPassword);
  };

  return (
    <div>
      {/* JSX for login modal or form */}
      <h1>{userLoggedIn ? `Hello, ${username}` : 'Please log in'}</h1>
      {/* Add other components or login form here */}
    </div>
  );
};

export default Test;
