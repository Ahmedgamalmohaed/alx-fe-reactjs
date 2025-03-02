import { useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import { useState } from "react";

function EditRecipeForm({recipe}) {
    const updateRecipe = useRecipeStore(state => state.updateRecipe);
    const [title, setTitle] = useState(recipe.title);
    const [description, setDescription] = useState(recipe.description);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        updateRecipe({ id: recipe.id, title, description });
        setTitle('');
        setDescription('');
        navigate("/")
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                />
                <button type="submit">Edit Recipe</button>
            </form>
        </div>
    )
}

export default EditRecipeForm;
