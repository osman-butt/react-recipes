import { Link } from "react-router-dom";
import AuthStatus from "./security/AuthStatus";

export default function NavHeader() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
          {/* <Link to="/">Home</Link> */}
        </li>
        <li>
          <a href="/categories">Categories</a>
          {/* <Link to="/categories">Categories</Link> */}
        </li>
        <li>
          <a href="/recipes">Recipes</a>
          {/* <Link to="/recipes">Recipes</Link> */}
        </li>
        <li>
          <a href="/add">Add</a>
          {/* <Link to="/add">Add</Link> */}
        </li>
        <AuthStatus />
      </ul>
    </nav>
  );
}
