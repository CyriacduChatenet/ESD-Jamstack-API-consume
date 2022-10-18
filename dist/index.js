"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const root = document.querySelector("#root");
const articleList = document.createElement("ul");
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
const searchBar = document.querySelector('#searchbar');
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        const datas = [];
        for (let i = 0; i < 3; i++) {
            const response = yield fetch("https://www.themealdb.com/api/json/v1/1/random.php");
            const meals = yield response.json();
            datas.push(meals.meals[0]);
        }
        datas.map((meal) => {
            const ingredients = [
                meal.strIngredient1,
                meal.strIngredient2,
                meal.strIngredient3,
                meal.strIngredient4,
                meal.strIngredient5,
            ];
            const article = document.createElement("article");
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
    });
})();
