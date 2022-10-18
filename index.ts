
interface IMeal {
  strIngredient1: string; 
  strIngredient2: string; 
  strIngredient3: string; 
  strIngredient4: string; 
  strIngredient5: string; 
  strMeal: string; 
  strMealThumb: string;
  strCategory : string;
  strArea : string;
  idMeal : string;
}
const root = document.querySelector("#root") as HTMLDivElement;

const articleList = document.createElement("ul") as HTMLUListElement;
articleList.classList.add('meal-list');

const navbar = document.createElement("nav");
navbar.innerHTML = `
<ul>
  <li>
    <a href='./index.html'>Home</a>
  </li>
  <li>
    <a href='./pages/meals/index.html'>Meals</a>
  </li>
  <li>
  <a href='./pages/category/index.html'>Categories</a>
</li>
</ul>
`;

root.append(navbar);
root.append(articleList);

(async function () {
  const datas : IMeal[] = [];

  for(let i = 0; i < 3; i++) {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const meals = await response.json();
    datas.push(meals.meals[0])
  } 

  datas.map((meal: IMeal) => {
    const ingredients = [
      meal.strIngredient1,
      meal.strIngredient2,
      meal.strIngredient3,
      meal.strIngredient4,
      meal.strIngredient5,
    ];

    const article = document.createElement("article") as HTMLTitleElement;
    article.classList.add('article');

    article.innerHTML = `
    <a href=${`./pages/meal/index.html?id=${meal.idMeal}?category=${meal.strCategory}?area=${meal.strArea}`}>
      <img src=${meal.strMealThumb} />
      <h2>${meal.strMeal}</h2>
      <ul class="ingredient-list">
        ${ingredients.map((ingredient) => `<li>${ingredient}</li>`)}
      </ul>
    </a>
    `;

    articleList.appendChild(article);
  });
})();