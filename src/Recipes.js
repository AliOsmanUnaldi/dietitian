import RecipeList from "./RecipeList";
import useFetch from "./useFetch";

const Recipes = () => {
    const {data: recipes , isPending, error} = useFetch('http://localhost:8000/recipes')

    return (
        <div className="home">

            {error && <div>{error}</div>}
            {isPending && <div>Loading..</div>}
            {recipes && <RecipeList recipes={recipes} title="Tüm tarifler"/>}
        </div>
    );
}

export default Recipes;