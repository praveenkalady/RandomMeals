const mealdb = new MEAL;
const ui = new UI;
const meal = document.getElementById('target-btn');

meal.addEventListener('click', (e) => {
  mealdb.getMeal()
    .then(function (data) {
      ui.showMeal(data.meals[0]);
      ui.getIngredients(data.meals[0]);
      ui.getMeasures(data.meals[0]);
    })
    .catch(err => console.log(err));
})