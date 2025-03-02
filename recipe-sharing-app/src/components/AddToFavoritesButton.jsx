import useRecipeStore from "./recipeStore";

function AddToFavoritesButton({id}) {
    const addFavorite = useRecipeStore(state => state.addFavorite);
    const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

    const handleAddToFavorites = () => {
        addFavorite(id);

        // Generate new recommendations at every addition to Favorites.
        generateRecommendations();
    }

    return (
        <div>
            <button onClick={handleAddToFavorites}>
                Add To Favorites
            </button>
        </div>
    )
}

export default AddToFavoritesButton;
