//import { useAuth } from "./_Authprovider";
import { Link } from "react-router-dom";

export default function AuthStatus() {
  //const auth = useAuth();

  //TODO: Replace with code to switch between login and logout
  return (
    <li>
      <Link to="/login">Login</Link>
    </li>
  );
  
}
