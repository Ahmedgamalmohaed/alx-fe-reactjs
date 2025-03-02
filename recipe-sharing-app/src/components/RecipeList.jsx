src/components/RecipeList.jsx doesn't contain: ["recipes", "map", "export", "RecipeList", "useRecipeStore", "import"]
import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";
import AddToFavoritesButton from "./AddToFavoritesButton";
import RemoveFromFavoritesButton from "./RemoveFromFavoritesButton";

const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);

    return (
        <div>
            {recipes.map(recipe => {
                const {id, title, description} = recipe;
                return (
                    <div key={id}>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <Link to={`/${id}`}>Details</Link>
                        <AddToFavoritesButton id={id} />
                        <RemoveFromFavoritesButton id={id} />
                    </div>
                )
            })}
        </div>
    );
};

export default RecipeList;
