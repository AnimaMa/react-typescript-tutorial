export const User = () => {
  const handleLogin = () => {}
  const handleLogout = () => {}

  return (
    <div>
      <button onClick={handleLogin}>Log in</button>
      <button onClick={handleLogout}>Log out</button>
      <p>User name is </p>
      <p>User email is </p>
    </div>
  );
}