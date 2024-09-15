import RecipeList from './RecipeList';
import recipes from './recipes.json';

const Recipes = () => {
    if (!recipes || recipes.length === 0) {
        return (
            <div className="home">
                <p>No recipes available.</p>
            </div>
        );
    }

    return (
        <div className="home">
            <RecipeList recipes={recipes} title="All recipes"/>
        </div>
    );
};
export default Recipes;