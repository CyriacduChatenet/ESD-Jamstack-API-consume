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
const HTMLCategories = document.querySelector("#root");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`);
    const mealCategories = yield response.json();
    const data = mealCategories.meals;
    console.log(data);
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
<br>
<h1>Categories</h1>
<ul id="categories-list"></ul>
`;
    const categoriesList = document.querySelector('#categories-list');
    data.map((categorie) => {
        const categorieItem = document.createElement('button');
        categorieItem.textContent = categorie.strCategory;
        categoriesList.append(categorieItem);
    });
}))();
