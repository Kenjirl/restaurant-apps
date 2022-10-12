import myData from "../../DATA.json";
import $ from "jquery";

const renderRestaurant = () => {
    const restaurant_list = myData.restaurants;

    restaurant_list.forEach((restaurant) => {
        $("#restaurantList").append(`
            <article class="restaurant">
                <label class="restaurant__rating">${restaurant.rating}</label>
                <img class="restaurant__img" src="${restaurant.pictureId}" alt="Foto ${restaurant.name}">
                <div class="card__info">
                    <h3 class="info__nama">${restaurant.name}</h3>
                    <p class="info__kota">${restaurant.city}</p>
                    <p class="info__detail">${restaurant.description}</p>
                </div>
            </article>
        `);
    });
};

export default renderRestaurant;
