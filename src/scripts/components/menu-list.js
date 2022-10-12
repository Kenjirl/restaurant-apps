import myData from "../../DATA.json";
import $ from "jquery";

const renderMenu = () => {
    const menu_list = myData.menus;

    menu_list.forEach((menu) => {
        $("#menuList").append(`
            <article class="menu">
                <label class="menu__price">Rp ${menu.price}</label>
                <img class="menu__img" src="${menu.pictureId}" alt="Foto ${menu.name}">
                <div class="card__info">
                    <h3 class="info__nama">${menu.name}</h3>
                    <p class="info__kota">${menu.from}</p>
                </div>
            </article>
        `);
    });
};

export default renderMenu;
