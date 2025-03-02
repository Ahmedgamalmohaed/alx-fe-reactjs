import { useState } from 'react';
import useRecipeStore from './recipeStore';

const AddRecipeForm = () => {
    const addRecipe = useRecipeStore(state => state.addRecipe);
    const filterRecipes = useRecipeStore(state => state.filterRecipes);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addRecipe({ id: Date.now(), title, description });
        filterRecipes();
        setTitle('');
        setDescription('');
    };

    return (
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
            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default AddRecipeForm;
