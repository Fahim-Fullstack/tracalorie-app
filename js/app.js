class CalorieTracker {
  constructor() {
    this._calorieLimit = 2000;
    this._totalCalories = 0;
    this._meals = [];
    this._workouts = [];

    this._displayCaloriesTotal();
  }

  // Public Methods/API
  addMeal(meal) {
    this._meals.push(meal);
    this._totalCalories += meal.calories;

    //rendering
    this._render();
  }
  addWorkout(workout) {
    this._meals.push(workout);
    this._totalCalories -= workout.calories;

    //rendering
    this._render();
  }

  //Private Methods
  _displayCaloriesTotal() {
    const totalCaloriesEl = document.getElementById('calories-total');
    totalCaloriesEl.innerHTML = this._totalCalories;
  }

  _displayCaloriesLimit() {
    const caloriesLimitEl = document.getElementById('calories-limit');
    caloriesLimitEl.innerHTML = this._calorieLimit;
  }

  _render() {
    this._displayCaloriesTotal();
  }
}

// Math.random().toString(16).slice(2)
class Meal {
  constructor(name, calories) {
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.calories = calories;
  }
}
class Workout {
  constructor(name, calories) {
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.calories = calories;
  }
}

const tracker = new CalorieTracker();
const breakfast = new Meal('Breakfast', 400);
tracker.addMeal(breakfast);

const lunch = new Meal('lunch', 350);
tracker.addMeal(lunch);

const run = new Workout('Morning Run', 100);
tracker.addWorkout(run);
console.log(tracker._meals);
console.log(tracker._workouts);
console.log(tracker._totalCalories);
