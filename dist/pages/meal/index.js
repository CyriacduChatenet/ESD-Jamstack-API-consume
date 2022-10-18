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
const startHTML = document.querySelector("#root");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const url_str = window.location.href.toLowerCase();
    const url = new URL(url_str);
    const urlParams = url.searchParams.get("id");
    const idParams = urlParams === null || urlParams === void 0 ? void 0 : urlParams.split("?")[0];
    const response = yield fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idParams}`);
    const meals = yield response.json();
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
    const ingredientsList = document.createElement("ul");
    startHTML.append(ingredientsList);
    const ingredients = [
        meal.strIngredient1,
        meal.strIngredient2,
        meal.strIngredient3,
        meal.strIngredient4,
        meal.strIngredient5,
    ];
    ingredients.map((ingredient) => {
        const ingredientItem = document.createElement("li");
        ingredientItem.textContent = ingredient;
        ingredientsList.append(ingredientItem);
    });
}))();
