import "./CategoryForm.css";
import { useState } from "react";
import { Category, addCategory } from "../services/apiFacade";
import { useLocation } from "react-router-dom";

const EMPTY_CATEGORY = {
  name: "",
};

export default function CategoryForm() {
  const [formData, setFormData] = useState<Category>(EMPTY_CATEGORY);
  console.log(useLocation());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newRecipe = await addCategory(formData);
    alert("New recipe added");
    console.info("New/Edited Recipe", newRecipe);
  };

  return (
    <>
      <h2>Category Add</h2>
      <form id="categoryForm">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
      </form>
      <button
        type="submit"
        className="category-form-btn"
        onClick={handleSubmit}
      >
        Submit
      </button>
      <button
        className="category-form-btn"
        onClick={() => {
          setFormData({ ...EMPTY_CATEGORY });
        }}
      >
        Cancel
      </button>
    </>
  );
}
