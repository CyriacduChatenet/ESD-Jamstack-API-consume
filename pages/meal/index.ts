interface IMeal {
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
  idMeal: string;
}

const startHTML = document.querySelector("#root") as HTMLDivElement;

(async () => {
  const url_str = window.location.href.toLowerCase();
  const url = new URL(url_str);
  const urlParams = url.searchParams.get("id");
  const idParams = urlParams?.split("?")[0];

  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idParams}`
  );
  const meals = await response.json();
  const meal = meals.meals[0];

  startHTML.innerHTML = `
          <ul>
            <li>
              <a href='../../index.html'>Home</a>
            </li>
            <li>
                <a href='../meals/index.html'>Meals</a>
            </li>
            <li>
              <a href='../category/index.html'>Categories</a>
          </li>
          <li>
          <a href='../search/index.html'>Categories</a>
      </li>
        </ul>
        <h1>${meal.strMeal}</h1>
        <p>category : ${meal.strCategory}</p>
        <img src=${meal.strMealThumb} />
    `;

  const ingredientsList = document.createElement("ul") as HTMLUListElement;
  startHTML.append(ingredientsList);

  const ingredients = [
    meal.strIngredient1,
    meal.strIngredient2,
    meal.strIngredient3,
    meal.strIngredient4,
    meal.strIngredient5,
  ];

  ingredients.map((ingredient) => {
    const ingredientItem = document.createElement("li") as HTMLLIElement;
    ingredientItem.textContent = ingredient;
    ingredientsList.append(ingredientItem);
  });
})();
