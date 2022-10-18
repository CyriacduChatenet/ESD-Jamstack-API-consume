const HTMLCategories = document.querySelector("#root") as HTMLDivElement;

(async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`);
    const mealCategories = await response.json();
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

const categoriesList = document.querySelector('#categories-list') as HTMLUListElement;

data.map((categorie : {strCategory : string}) => {
    const categorieItem = document.createElement('button') as HTMLButtonElement;
    categorieItem.textContent = categorie.strCategory;
    
    categoriesList.append(categorieItem);
})
})()