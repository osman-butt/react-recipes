//import { useAuth } from "./_Authprovider";
import { NavLink } from "react-router-dom";

export default function AuthStatus() {
  //const auth = useAuth();

  //TODO: Replace with code to switch between login and logout
  return (
    <li>
      <NavLink to="/login">Login</NavLink>
    </li>
  );
}
