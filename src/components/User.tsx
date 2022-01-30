import { useState} from 'react';

type AuthUser = {
  name: string;
  email: string;
}


export const User = () => {

  const [user, setUser] = useState<AuthUser>({} as AuthUser)  
  const handleLogin = () => {
    setUser({
      name: "lalaa",
      email: "lala@la.la"
    })
  }
  const handleLogout = () => {
  }

  return(
    <>
      <button onClick={handleLogin}>Log in</button>
      <button onClick={handleLogout}>Log out</button>

      <div>
        <p>User name is {user?.name}</p>
        <p>User email is {user?.email}</p>
      </div>

    </>
  )
}