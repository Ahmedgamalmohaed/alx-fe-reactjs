import { useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

function DeleteRecipeButton({id}) {
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
    const navigate = useNavigate();

    const handleDelete = () => {
        deleteRecipe(id)
        navigate('/')
    }

    return (
        <div>
            <button onClick={handleDelete}>
                Delete
            </button>
        </div>
    )
}

export default DeleteRecipeButton;
