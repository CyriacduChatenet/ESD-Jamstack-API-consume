interface IMealRecipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

enum mealCategoryChoice {
  Beef = "Beef",
  Breakfast = "Breakfast",
  Chicken = "Chicken",
  Dessert = "Dessert",
  Goat = "Goat",
  Lamb = "Lamb",
  Miscellaneous = "Miscellaneou",
  Pasta = "Pasta",
  Pork = "Pork",
  Seafood = "Seafood",
  Side = "Side",
  Starter = "Starter",
  Vegan = "Vegan",
  Vegetarian = "Vegetarian",
}

const HTMLCategories = document.querySelector("#root") as HTMLDivElement;

const recipes : IMealRecipe[] = [];
(async () => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`);
  const mealCategories = await response.json();
  const data = mealCategories.meals;
  console.log(data);

  const recipeResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${mealCategoryChoice.Beef}`);
  const mealRecipes = await recipeResponse.json();
  const recipes = mealRecipes.meals;
  console.log('recipes',recipes);


  HTMLCategories.innerHTML = `
    <ul>
    <li>
      <a href='../../index.html'>Home</a>
    </li>
    <li>
        <a href='../meals/index.html'>Meals</a>
    </li>
    <li>
      <a href='./index.html'>Categories</a>
  </li>
</ul>
<h1>Categories</h1>
<ul id="categories-list"></ul>
`;

  const categoriesList = document.querySelector(
    "#categories-list"
  ) as HTMLUListElement;

  data.map((categorie: { strCategory: string }) => {
    const categorieItem = document.createElement("button") as HTMLButtonElement;
    categorieItem.textContent = categorie.strCategory;

    categoriesList.append(categorieItem);
  });

  recipes.map((mealRecipes: IMealRecipe) => {
    const filteredRecipeCard = document.createElement("li");
    filteredRecipeCard.innerHTML = `
    <img src=${mealRecipes.strMealThumb} />
    <h2>${mealRecipes.strMeal}</h2>
  `;

    categoriesList.append(filteredRecipeCard);
  });
})();
