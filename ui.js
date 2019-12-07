class UI {
  constructor() {
    this.displayMeal = document.getElementById('output');
    this.ingredients = [];
    this.measures = [];
  }
  showMeal(mealData) {
    this.clearMeal();
    this.displayMeal.innerHTML = `
    <div class="card card-body mb-3 mt-3">
    <h3 class="page-heading mb-3 text-center">${mealData.strMeal}</h3>
    <h4 class="page-heading mb-3 text-center ">Category : ${mealData.strCategory}</h4>
    <div class="row">
    <div class="col-sm-5">
    <img class="img-fluid mb-2" src="${mealData.strMealThumb}">
    <a href="${mealData.strYoutube}" target="_blank"class="btn btn-primary btn-block mb-4">Watch Video</a>
    <p class="text-monospace">Area :${mealData.strArea}</p>
    <p class="text-monospace">Tags :${mealData.strTags}</p>
    </div>
    <div class="col-sm-3 mr-0">
    <ul class="list-group text-monospace" id="ingredients">
  </ul>
  </div>
  <div class="col-sm-3 ml-0">
  <ul class="list-group text-monospace" id="measures">
  </ul>
    </div>
    </div>
    </div>
    <div class="card card-body mb-3 mt-3">
    <h3 class="page-heading mb-3 text-center">Recipe</h3>
    <div>
    <p class="text-monospace lh-4">${mealData.strInstructions}</p>
    </div>
    </div>
    </div>
    `;

  }
  clearMeal() {
    this.displayMeal.innerHTML = '';
  }
  getIngredients(mealData) {
    for (let i = 1; i <= 20; ++i) {
      if (mealData[`strIngredient${i}`]) {
        this.ingredients.push(mealData[`strIngredient${i}`]);
      }
      const list = document.getElementById('ingredients');
      let output = '';
      this.ingredients.forEach((ingredient) => {
        output += ` <li class="list-group-item">${ingredient}</li>`
      })
      list.innerHTML = output;
    }
    this.ingredients = [];
  }
  getMeasures(mealData) {
    for (let i = 0; i <= 20; ++i) {
      if (mealData[`strMeasure${i}`]) {
        this.measures.push(mealData[`strMeasure${i}`]);
      }
      const list = document.getElementById('measures');
      let output = '';
      this.measures.forEach((measure) => {
        output += `<li class="list-group-item">${measure}</li>`;
      })
      list.innerHTML = output;
    }
    this.measures = [];
  }

}