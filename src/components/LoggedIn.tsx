import { useState } from 'react';

type LoggeddInProps = {};

export const LoggedIn = (props: LoggeddInProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true)
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false)
  };

  return (
    <>
      <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>

        <hr />
        <div>
          <h2>User is {isLoggedIn ? 'legged in' : 'logged out'}</h2>
        </div>
      </div>
    </>
  );
};
