// Task 1: Using forEach()
let favoriteCities = ["Osaka", "Tokyo", "Washington, DC", "Amsterdam", "London"];

favoriteCities.forEach(city => {
  console.log(city.toUpperCase());
});
// OSAKA
// TOKYO
// WASHINGTON, DC
// AMSTERDAM
// LONDON

// Task 2: Transforming with map()
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(num => num * num);

console.log(squares);
// [ 1, 4, 9, 16, 25 ]

// Task 3: Filtering with filter()
let scores = [85, 42, 90, 75, 30, 100];
let highScores = scores.filter(score => score >= 80);

console.log(highScores);
// [ 85, 90, 100 ]

// Task 4: Finding with find() and findIndex()
let favoriteFood = ["curry", "fries", "steak", "salad", "apples"];
let longFood = favoriteFood.find(food => food.length > 4);
let longFoodIndex = favoriteFood.findIndex(food => food.length > 4);

console.log(longFood);
// curry
console.log(longFoodIndex);
// 0

// Task 5: Checking conditions with some() and every()
let temperatures = [69, 74, 80, 84, 92];
let anyAbove90 = temperatures.some(temp => temp > 90);
let allAbove50 = temperatures.every(temp => temp > 50);

console.log([anyAbove90, allAbove50]);
// [ true, true ]

// Task 6: Reducing with reduce()
let budget = 200.00;
let prices = [37.84, 62.19, 18.47, 54.63];
let remaining = prices.reduce((total, price) => total - price, budget);

console.log(`Starting budget: $${budget.toFixed(2)}`);
// Starting budget: $200.00
console.log(`Remaining budget: $${remaining.toFixed(2)}`);
// Remaining budget: $26.87
