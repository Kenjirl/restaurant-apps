import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import navbar from "./components/nav-bar.js";
import dropdown from "./components/dropdown.js";
import renderRestaurant from "./components/restaurant-list.js";
import renderMenu from "./components/menu-list.js";

const main = () => {
    navbar();
    dropdown();
    renderRestaurant();
    renderMenu();
};

document.addEventListener("DOMContentLoaded", main);
