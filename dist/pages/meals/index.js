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
const HTMLStart = document.querySelector("#root");
const articlesList = document.createElement("ul");
articlesList.classList.add('meal-list');
const nav = document.createElement("nav");
nav.innerHTML = `
  <ul>
    <li>
      <a href='../../index.html'>Home</a>
    </li>
    <li>
      <a href='./index.html'>Meals</a>
    </li>
    <li>
      <a href='../category/index.html'>Categories</a>
  </li>
  <li>
  <a href='../search/index.html'>Search</a>
</li>
  </ul>
  `;
HTMLStart.append(nav);
HTMLStart.append(articlesList);
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
        const meals = yield response.json();
        let data = meals.meals;
        data.map((meal) => {
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
      <a href=${`../meal/index.html?title=${meal.strMeal}?ingredients=${ingredients}`}>
        <img src=${meal.strMealThumb} />
        <h2>${meal.strMeal}</h2>
        <ul class="ingredient-list">
          ${ingredients.map((ingredient) => `<li>${ingredient}</li>`)}
        </ul>
      </a>
      `;
            articlesList.appendChild(article);
        });
    });
})();
