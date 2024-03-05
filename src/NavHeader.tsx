import { NavLink } from "react-router-dom";
import AuthStatus from "./security/AuthStatus";
import { useAuth } from "./security/AuthProvider";

export default function NavHeader() {
  const auth = useAuth();
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
          {/* <Link to="/">Home</Link> */}
        </li>
        <li>
          <NavLink to="/categories">Categories</NavLink>
          {/* <Link to="/categories">Categories</Link> */}
        </li>
        <li>
          <NavLink to="/recipes">Recipes</NavLink>
          {/* <Link to="/recipes">Recipes</Link> */}
        </li>
        {auth.isLoggedIn() && auth.isLoggedInAs(["USER", "ADMIN"]) && (
          <>
            <li>
              <NavLink to="/add">Add</NavLink>
            </li>
          </>
        )}
        {auth.isLoggedIn() && auth.isLoggedInAs(["ADMIN"]) && (
          <>
            <li>
              <NavLink to="/category">Add Category</NavLink>
            </li>
          </>
        )}
        <AuthStatus />
      </ul>
    </nav>
  );
}
