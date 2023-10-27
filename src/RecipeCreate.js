import React, { useState } from "react";

function RecipeCreate({ onRecipeCreate }) {
  const [recipe, setRecipe] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({
      ...recipe,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onRecipeCreate(recipe);
    setRecipe({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: "",
    });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                name="name"
                value={recipe.name}
                onChange={handleChange}
                placeholder="Name of the dish"
                required
              />
            </td>
            <td>
              <input
                type="text"
                name="cuisine"
                value={recipe.cuisine}
                onChange={handleChange}
                placeholder="Cuisine"
                required
              />
            </td>
            <td>
              <input
                type="url"
                name="photo"
                value={recipe.photo}
                onChange={handleChange}
                placeholder="URL of dish photo"
                required
              />
            </td>
            <td className="content_td">
              <textarea
                name="ingredients"
                value={recipe.ingredients}
                onChange={handleChange}
                placeholder="Ingredients"
                required
                rows={3}
              />
            </td>
            <td className="content_td">
              <textarea
                name="preparation"
                value={recipe.preparation}
                onChange={handleChange}
                placeholder="Preparation instructions"
                required
                rows={3}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;

