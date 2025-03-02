import useRecipeStore from "./recipeStore";

function RemoveFromFavoritesButton({id}) {
    const removeFavorite = useRecipeStore(state => state.removeFavorite);

    return (
        <div>
            <button onClick={() => removeFavorite(id)}>
            Remove From Favorites
            </button>
        </div>
    )
}

export default RemoveFromFavoritesButton;
