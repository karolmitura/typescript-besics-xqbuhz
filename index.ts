// Import stylesheets
import "./style.css";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const pizzaCost = 10;
const pizzaToppings = 2;

function calculatePrivce(cost: number, toppings: number) {
  return cost + toppings;
}

const price = calculatePrivce(pizzaCost, pizzaToppings);
console.log(price);
