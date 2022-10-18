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

const HTMLbegin = document.querySelector('#root') as HTMLDivElement;

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

const fetchData = async (value : string) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
    const meals = await response.json();
    let data = meals.meals;
    console.log(data);

    const categoriesList = document.querySelector('#categories-list') as HTMLDivElement;

    data.map((recipe : IMeal) => {
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
    })
};

const searchbar = document.querySelector('#searchbar') as HTMLInputElement;
const searchButton = document.querySelector('#search-btn') as HTMLButtonElement;

searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    fetchData(searchbar.value);
})