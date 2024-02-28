import { useOutlet } from "react-router-dom";
import RecipeList from "./RecipeList";
import "./RecipesLayout.css";
//import { useAuth } from "../security/_Authprovider";

export default function RecipesLayout() {
  const outlet = useOutlet();

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1, flexDirection: "column" }}>
        <RecipeList />
      </div>
      <div className="outlet-container">
        {outlet || <h3>Select a recipe to see details</h3>}
        {/* <Outlet /> */}
      </div>
    </div>
  );
}
