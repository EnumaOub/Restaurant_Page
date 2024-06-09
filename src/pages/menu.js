
const mealGeneration = (function(){


    class Menu {
        constructor(meal, name, price) {
            this.meal = meal;
            this.name = name;
            this.price = price;
        }

        getPrice() {
            return `${this.price} silver coins`;
        }
    }

    const meals = {
        "Starters": [
            new Menu("Starters", "Mystic Mushroom Medley", 5),
            new Menu("Starters", "Clockwork Calamari", 6),
        ],
        "Main Course": [
            new Menu("Main Courses", "Arcane Stew", 12),
            new Menu("Main Courses", "Grilled Dragon Steak", 20),
            new Menu("Main Courses", "Mage’s Mushroom Risotto", 15),
        ],
        "Desserts": [
            new Menu("Desserts", "Spellbound Sweetrolls ", 4),
            new Menu("Desserts", "Enchanted Cake", 7),
        ],
        "Drinks": [
            new Menu("Drinks", "Wizard’s Wine", 8),
            new Menu("Drinks", "Potion of Bliss", 5),
            new Menu("Drinks", "Clockwork Coffee", 3),
        ]
    }

    return {meals};

})();

const generatePage = (function() {

    let container;
    let nav;
    let tabContainer;

    const meals = mealGeneration.meals;

    const toggleActive = (button) => {
        const btn_active = document.getElementsByClassName("btn-meal active")[0];
        btn_active.classList.toggle("active");
        button.classList.toggle("active");
    }

    const genTab = (arr, mealType) => {
        
        tabContainer.id = "tab-meal"
        const title = document.createElement("h5");
        title.innerText = mealType;
        tabContainer.appendChild(title);
        for (let meal of arr) {
            const namePrice = document.createElement("card");
            namePrice.innerHTML = `${meal.name} - ${meal.getPrice()}`
            tabContainer.appendChild(namePrice);
        }
        return tabContainer;
    }

    const changeTab = (button) => {
        tabContainer.innerHTML = "";
        genTab(meals[button.id], button.id);
        container.appendChild(tabContainer)        
    }

    const createButtons = () => {
        for (let key of Object.keys(meals)) {
            const button = document.createElement("button");
            button.id = key;
            button.classList.add("btn-meal")
            button.textContent = key;
            button.addEventListener("click", (e) => {
                if (!(e.target.classList.contains("active"))){
                    toggleActive(e.target);
                    changeTab(e.target);
                }
            });
            if (key === "Starters") {
                button.classList.toggle("active")
            }
            nav.appendChild(button);
          }
          container.appendChild(nav);
    }

    const initElements = () => {
        container = document.createElement("card");
        nav = document.createElement("nav");
        tabContainer = document.createElement("card");
        container.innerHTML = ""
        container.id = "menu-cont";
        createButtons();
    }
    
    const displayTab = () => {
        initElements();
        const btn_active = container.getElementsByClassName("btn-meal active")[0];
        changeTab(btn_active);
        return container;

    }

    return {displayTab}

})()



export default function menuGen() {
    return generatePage.displayTab();
}