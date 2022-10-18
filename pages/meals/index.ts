
interface IMeal {
    strIngredient1: string; 
    strIngredient2: string; 
    strIngredient3: string; 
    strIngredient4: string; 
    strIngredient5: string; 
    strMeal: string; 
    strMealThumb: string;
  }
  const HTMLStart = document.querySelector("#root") as HTMLDivElement;
  
  const articlesList = document.createElement("ul") as HTMLUListElement;
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
  </ul>
  `;
  
  HTMLStart.append(nav);
  HTMLStart.append(articlesList);
  
  (async function () {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    const meals = await response.json();
    let data = meals.meals;
  
    data.map((meal: IMeal) => {
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
      <a href=${`./meal/index.html?title=${meal.strMeal}?ingredients=${ingredients}`}>
        <img src=${meal.strMealThumb} />
        <h2>${meal.strMeal}</h2>
        <ul class="ingredient-list">
          ${ingredients.map((ingredient) => `<li>${ingredient}</li>`)}
        </ul>
      </a>
      `;
  
      articlesList.appendChild(article);
    });
  })();