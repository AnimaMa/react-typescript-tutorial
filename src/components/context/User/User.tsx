import { useContext } from "react";
import { UserContext } from "./UserContext";

export const User = () => {

  const userContext = useContext(UserContext)

  const handleLogin = () => {
    // if(userContext) {
      userContext.setUser({
        name: "Liza",
        email: "typescriptova"
      })
    // }
  }
  const handleLogout = () => {
    // if(userContext) {
      userContext.setUser(null)
    // }
  }

  return (
    <div>
      <button onClick={handleLogin}>Log in</button>
      <button onClick={handleLogout}>Log out</button>
      {/* <p>User name is {userContext?.user?.name} </p> */}
      <p>User name is {userContext.user?.name} </p>
      <p>User email is {userContext.user?.email}</p>

      {/* <p>User email is {userContext?.user?.email}</p> */}
    </div>
  );
}