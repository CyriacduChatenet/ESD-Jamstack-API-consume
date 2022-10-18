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
var mealCategoryChoice;
(function (mealCategoryChoice) {
    mealCategoryChoice["Beef"] = "Beef";
    mealCategoryChoice["Breakfast"] = "Breakfast";
    mealCategoryChoice["Chicken"] = "Chicken";
    mealCategoryChoice["Dessert"] = "Dessert";
    mealCategoryChoice["Goat"] = "Goat";
    mealCategoryChoice["Lamb"] = "Lamb";
    mealCategoryChoice["Miscellaneous"] = "Miscellaneou";
    mealCategoryChoice["Pasta"] = "Pasta";
    mealCategoryChoice["Pork"] = "Pork";
    mealCategoryChoice["Seafood"] = "Seafood";
    mealCategoryChoice["Side"] = "Side";
    mealCategoryChoice["Starter"] = "Starter";
    mealCategoryChoice["Vegan"] = "Vegan";
    mealCategoryChoice["Vegetarian"] = "Vegetarian";
})(mealCategoryChoice || (mealCategoryChoice = {}));
const HTMLCategories = document.querySelector("#root");
const recipes = [];
(() => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`);
    const mealCategories = yield response.json();
    const data = mealCategories.meals;
    console.log(data);
    const recipeResponse = yield fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${mealCategoryChoice.Beef}`);
    const mealRecipes = yield recipeResponse.json();
    const recipes = mealRecipes.meals;
    console.log('recipes', recipes);
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
    const categoriesList = document.querySelector("#categories-list");
    data.map((categorie) => {
        const categorieItem = document.createElement("button");
        categorieItem.textContent = categorie.strCategory;
        categoriesList.append(categorieItem);
    });
    recipes.map((mealRecipes) => {
        const filteredRecipeCard = document.createElement("li");
        filteredRecipeCard.innerHTML = `
    <img src=${mealRecipes.strMealThumb} />
    <h2>${mealRecipes.strMeal}</h2>
  `;
        categoriesList.append(filteredRecipeCard);
    });
}))();
