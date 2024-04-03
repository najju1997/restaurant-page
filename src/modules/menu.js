function createMenuPage() {
    let main = document.createElement("main");

    let menu_container = document.createElement("div");
    menu_container.classList.add("menu-container");
    main.appendChild(menu_container);

    for(let i = 1; i <= 8; i++) {
        menu_container.appendChild(createFood());
    }

    return main;
}

function createFood() {
    let food1_container = document.createElement("div");
    food1_container.classList.add("card");

    let food1 = document.createElement("div");
    food1.classList.add("pizza");
    food1_container.appendChild(food1);

    let food1_title = document.createElement("div");
    food1_title.classList.add("food1-title");
    food1_title.innerHTML = "Momo Twakka Piro Mitho";
    food1_container.appendChild(food1_title);

    let food1_ingredients = document.createElement("div");
    food1_ingredients.classList.add("food1-ingredients");
    food1_ingredients.innerHTML = "Buff, jhol, momo, k k ho khai";
    food1_container.appendChild(food1_ingredients);

    return food1_container;
}

export default createMenuPage;
