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
const HTMLbegin = document.querySelector('#root');
HTMLbegin.innerHTML = `
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
<li>
<a href='../search/index.html'>Meals</a>
</li>
</ul>
<h1>Search</h1>
<form>
    <input type="text" placeholder="search" id="searchbar" />
    <button id="search-btn">Search</button>
</form>
<ul id="categories-list"></ul>
`;
const fetchData = (value) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
    const meals = yield response.json();
    let data = meals.meals;
    console.log(data);
    const categoriesList = document.querySelector('#categories-list');
    data.map((recipe) => {
        const ingredients = [
            recipe.strIngredient1,
            recipe.strIngredient2,
            recipe.strIngredient3,
            recipe.strIngredient4,
            recipe.strIngredient5,
        ];
        const mealHTML = document.createElement('div');
        mealHTML.innerHTML = `
        <a href=${`../meal/index.html?title=${recipe.strMeal}?ingredients=${ingredients}`}>
        <img src=${recipe.strMealThumb} />
        <h2>${recipe.strMeal}</h2>
        `;
        categoriesList.append(mealHTML);
    });
});
const searchbar = document.querySelector('#searchbar');
const searchButton = document.querySelector('#search-btn');
searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    fetchData(searchbar.value);
});
