import { Link } from "react-router-dom";
import dietitianImage from './diyetisyen-background.jpg';

const RecipeList = ({ recipes, title }) => {

    // Helper function to truncate text
    const truncateText = (text, length) => {
        if (text.length <= length) return text;
        return text.slice(0, length) + '...';
    };

    return (
        <div className="container">
            <div className="recipe-list">
                <h2 className="recipe-title">Tarifler</h2>
                {recipes.map(recipe => (
                    <div className="recipe-preview" key={recipe.id} >
                        <img src={dietitianImage} alt="resim" />
                        <div className="recipe-content">
                            <h3>{recipe.title}</h3>
                            <p>{truncateText(recipe.body, 300)}</p>
                            <p><Link to={`/recipes/${recipe.id}`} className="read-more">Devamını Oku</Link></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecipeList;
