import { useParams } from "react-router-dom";
import recipeData from './recipes.json';
import React, { useEffect, useState } from 'react';

const RecipeDetails = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const foundRecipe = recipeData.find(recipe => recipe.id === id);
        setRecipe(foundRecipe);
    }, [id]);

    return (
        <div className="recipe-details">
            {recipe ? (
                <article>
                    <h2>{recipe.title}</h2>
                    <img src={recipe.image} alt="resim"/>
                    <div>{recipe.body}</div>
                </article>
            ) : (
                <div>Tarif bulunamadı</div>
            )}
        </div>
    );
};

export default RecipeDetails;
