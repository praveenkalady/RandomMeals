class MEAL {
  async getMeal() {
    const mealDetailes = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const mealData = await mealDetailes.json();
    return mealData;
  }
}